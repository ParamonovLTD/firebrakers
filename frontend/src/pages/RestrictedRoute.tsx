import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect, RouteProps, useLocation } from 'react-router-dom';
// import { userRoleSelector } from '../store/slices/authSlice';

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
