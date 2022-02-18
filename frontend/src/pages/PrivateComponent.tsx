import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { RootState } from '../store/store';
import RestrictedRoute from './RestrictedRoute';

import Home from './Home';

import NotFoundPage from './NotFoundPage';
import { userRoleSelector } from '../store/slices/authSlice';
import AdminTests from './AdminTests';
import AdminAddStudent from './AdminAddStudent';
import StudentTests from './StudentTests';

export const PrivateComponent: FC = () => {
  const location = useLocation();
  const role = useSelector(userRoleSelector);

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
      {role === 'admin' &&
        <Route exact path="/adminTests" component={AdminTests}/>
      }
      {role === 'admin' &&
        <Route exact path="/add" component={AdminAddStudent} />
      }


      {role === 'student' &&
        <Route exact path="/tests" component={StudentTests}/>
      }


      <Route path="*" component={NotFoundPage} />

    </Switch>
  );
};
