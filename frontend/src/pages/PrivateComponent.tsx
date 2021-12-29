import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { RootState } from '../store/store';
import RestrictedRoute from './RestrictedRoute';

import Home from './Home';

import NotFoundPage from './NotFoundPage';

export const PrivateComponent: FC = () => {
  const location = useLocation();

  // const { isAuthenticated, checkAuthError } = useSelector(
  //   (state: RootState) => state.auth,
  // );

  if (location.pathname === '/') {
    return <Home />;
  }

  // if (!isAuthenticated && !checkAuthError) {
  //   return null;
  // }
  //
  // if (!isAuthenticated && checkAuthError && location.pathname !== '/') {
  //   return <Redirect to="/login" />;
  // }

  return (
    <Switch>

      <Route path="*" component={NotFoundPage} />

    </Switch>
  );
};
