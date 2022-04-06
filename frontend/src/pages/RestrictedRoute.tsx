import React, { FC, memo } from 'react';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';

interface Props extends RouteProps {
  forRole: string | string[];
  redirectPath: string;
}

const RestrictedRoute: FC<Props> =
  ({ forRole, redirectPath, ...rest }) => {
    const location = useLocation();

    // const userRole = useSelector(userRoleSelector);
    return null

    // return (forRole.includes(userRole as string) ?
    //   <Route
    //     {...rest}
    //   /> :
    //   <Redirect
    //     to={{
    //       pathname: redirectPath,
    //       state: { from: location.pathname },
    //     }}
    //   />
    // );
  };

export default memo(RestrictedRoute);
