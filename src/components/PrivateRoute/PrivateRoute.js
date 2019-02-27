import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    component: RouteComponent,
    isAuthorized,
    redirectPath,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={routeProps =>
                isAuthorized ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={redirectPath} />
                )
            }
        />
    );
};
export { PrivateRoute };
