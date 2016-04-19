/// <reference path="./angular-permission.d.ts" />

import permission = angular.permission;

angular
  .module('fooModule', ['permission', 'user'])
  .run(function (PermissionStore: permission.PermissionStore, User: any) {
    // Define anonymous permission
    PermissionStore
      .definePermission('anonymous', function (stateParams) {
        // If the returned value is *truthy* then the user has the permission, otherwise they don't
        if (!User) {
          return true; // Is anonymous
        }
        return false;
      });
  });

  interface BackendUserService {
    checkSession(): angular.IPromise<any>;
    getAccessLevel(): angular.IPromise<{accessLevel: string}>;
    hasPermissionDefinition(permission: string) : angular.IPromise<any>;
  }

  angular.module('barModule', ['permission', 'user'])
  .run(function (PermissionStore: permission.PermissionStore, User: BackendUserService, $q: angular.IQService) {
    PermissionStore
      // Define user permission calling back-end
      .definePermission('user', function (stateParams) {
        // This time we will return a promise
        // If the promise *resolves* then the user has the permission, if it *rejects* (you guessed it)

        // Let's assume this returns a promise that resolves or rejects if session is active
        return User.checkSession();
      });

    PermissionStore
      // A different example for admin
      .definePermission('admin', function (stateParams) {
        var deferred = $q.defer();

        User.getAccessLevel()
          .then(function (data) {
            if (data.accessLevel === 'admin') {
              deferred.resolve();
            } else {
              deferred.reject();
            }
          })
          .catch(function () {
            // Error with request
            deferred.reject();
          });

        return deferred.promise;
      });

    let arrayOfPermissionNames = ['p1', 'p2'];
    PermissionStore.defineManyPermissions(arrayOfPermissionNames, function (stateParams: angular.ui.IStateParamsService, permissionName: string) {
      return User.hasPermissionDefinition(permissionName);
    });

    PermissionStore.clearStore();

    PermissionStore.removePermissionDefinition('user');

    let permissions: Array<permission.Permission> = PermissionStore.getStore();


  });

angular
  .module('fooModule', ['permission', 'user'])
  .run(function (RoleStore: permission.RoleStore, User: any) {
    RoleStore
      // Permission array validated role
      // Library will internally validate if 'user' and 'editor' permissions are valid when checking if role is valid
      .defineRole('admin', ['user', 'editor']);

    RoleStore
      // Server side validated role
      .defineRole('accountant', [], function (stateParams) {
        // Let's assume that we are making a request to server here and return response as promise
        return User.hasRole('accountant');
      });

    RoleStore.clearStore();

    RoleStore.removeRoleDefinition('user');

    let roles: Array<permission.Role> = RoleStore.getStore();
  });
