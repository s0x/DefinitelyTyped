import * as React from 'react';
import {
    QueryString, Query,
    Location, LocationDescriptor, LocationState,
    History,
    Pathname, Path } from 'history';

declare const Router: Router;
interface Router extends React.ComponentClass<Router.RouterProps> { }

export default Router;

// types based on https://github.com/rackt/react-router/blob/master/docs/Glossary.md

declare namespace Router {
    type RouteConfig = React.ReactNode | PlainRoute | PlainRoute[];
    type RoutePattern = string;
    type RouteComponents = { [key: string]: RouteComponent };

    type ParseQueryString = (queryString: QueryString) => Query;
    type StringifyQuery = (queryObject: Query) => QueryString;

    type Component = React.ReactType;
    type RouteComponent = Component;

    type EnterHook = (nextState: RouterState, replace: RedirectFunction, callback?: Function) => void;
    type LeaveHook = () => void;
    type ChangeHook = (prevState: RouterState, nextState: RouterState, replace: RedirectFunction, callback: Function) => void;
    type RouteHook = (nextLocation?: Location) => any;

    type Params = { [param: string]: string };

    type RouterListener = (error: Error, nextState: RouterState) => void;


    interface RedirectFunction {
        (location: LocationDescriptor): void;
        /**
        * @deprecated `replaceState(state, pathname, query) is deprecated; Use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated
        */
        (state: LocationState, pathname: Pathname | Path, query?: Query): void;
    }

    interface RouterState {
        location: Location;
        routes: PlainRoute[];
        params: Params;
        components: RouteComponent[];
    }

	interface RouterProps extends React.Props<Router> {
	    history?: History;
	    routes?: RouteConfig; // alias for children
	    createElement?: (component: RouteComponent, props: Object) => any;
	    onError?: (error: any) => any;
	    onUpdate?: () => any;
	    parseQueryString?: ParseQueryString;
	    stringifyQuery?: StringifyQuery;
	}

    interface PlainRoute {
        path?: RoutePattern;
        component?: RouteComponent;
        components?: RouteComponents;
        getComponent?: (location: Location, cb: (error: any, component?: RouteComponent) => void) => void;
        getComponents?: (location: Location, cb: (error: any, components?: RouteComponents) => void) => void;
        onEnter?: EnterHook;
        onLeave?: LeaveHook;
        indexRoute?: PlainRoute;
        getIndexRoute?: (location: Location, cb: (error: any, indexRoute: RouteConfig) => void) => void;
        childRoutes?: PlainRoute[];
        getChildRoutes?: (location: Location, cb: (error: any, childRoutes: RouteConfig) => void) => void;
    }

    interface RouteComponentProps<P, R> {
        history?: History;
        location?: Location;
        params?: P;
        route?: PlainRoute;
        routeParams?: R;
        routes?: PlainRoute[];
        children?: React.ReactElement<any>;
    }

    interface RouterOnContext extends History {
        setRouteLeaveHook(route: PlainRoute, hook?: RouteHook): () => void;
        isActive(pathOrLoc: LocationDescriptor, indexOnly?: boolean): boolean;
    }
}
