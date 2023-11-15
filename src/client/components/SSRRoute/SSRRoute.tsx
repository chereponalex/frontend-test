import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import { Route } from 'react-router';
import { AppPropsType } from "@/client/App";
// import { createBrowserHistory } from 'history';

export type SSRRouteProps = { route: RouteConfig; path: string; appProps: AppPropsType };

export const SSRRoute: React.FC<SSRRouteProps> = ({ route, path, appProps }: SSRRouteProps) => {
    const Component = route.component as any;
    // const history = createBrowserHistory();

    return (
        <Route
        
            path={path}
            exact={route.exact}
            strict={route.strict}
            render={(p) => <Component route={route} {...p} {...appProps} />}
        />
    );
};

export default React.memo(SSRRoute);
