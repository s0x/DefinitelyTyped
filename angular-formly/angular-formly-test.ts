/// <reference path="angular-formly.d.ts" />

var app = angular.module('app', ['formly']);

interface IScope extends ng.IScope {
	to: { label: string; }
}

class AppController {
	fields: AngularFormly.IFieldConfigurationObject[];
	constructor($scope: ng.IScope) {
		var vm = this;
		vm.fields = [
			{
				key: 'email',
				type: 'input',
				templateOptions: {
					label: 'Email',
					required: true,
					type: 'email',
					maxlength: 10,
					minlength: 6,
					placeholder: 'example@example.com'
				}
			},
			{
				key: 'ip',
				type: 'input',
				validators: {
					ipAddress: {
						expression: function(viewValue, modelValue) {
							var value = modelValue || viewValue;
							return /(\d{1,3}\.){3}\d{1,3}/.test(value);
						},
						message: '$viewValue + " is not a valid IP Address"'
					}
				},
				templateOptions: {
					label: 'IP Address',
					required: true,
					type: 'text',
					placeholder: '127.0.0.1',
				},
				validation: {
					messages: {
						required: function($viewValue: any, $modelValue: any, scope: IScope) {
							return scope.to.label + ' is required'
						}
					}
				}
			},
			{
				key: 'mac',
				type: 'input',
				templateOptions: {
					label: 'MAC Address',
					required: true,
					placeholder: '49-8A-BD-4E-00-1D',
					pattern: '([0-9A-F]{2}[:-]){5}([0-9A-F]{2})'
				}
			},
			{
				type: 'checkbox',
				key: 'checked',
				templateOptions: {
					label: 'Check this'
				}
			},
			{
				key: 'checked2',
				type: 'checkbox',
				wrapper: null,
				templateOptions: {
					label: 'no wrapper here...'
				}
			}
		]
	}
}

app.controller("AppController", AppController);

