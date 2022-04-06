import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from './Home';

import NotFoundPage from './NotFoundPage';
import { userRoleSelector } from '../store/slices/authSlice';
import AdminAddStudent from './AdminAddStudent';
import AdminCreateTest from './AdminCreateTest';
import AdminTestsPage from './AdminTests';
import StudentTestsPage from './StudentTests';
import StudentPassTest from '../shared/components/StudentPassTest';
import Education from './Education';
import Documents from './Documents';

export const PrivateComponent: FC = () => {
  const location = useLocation();
  const role = useSelector(userRoleSelector);

  if (location.pathname === '/') {
    return <Home />;
  }

  return (
    <Switch>
      {role === 'admin' &&
        <Route exact path="/adminTests" component={AdminTestsPage}/>
      }
      {role === 'admin' &&
        <Route exact path="/add" component={AdminAddStudent} />
      }
      {role === 'admin' &&
        <Route exact path="/adminTests/create" component={AdminCreateTest} />
      }
      {role === 'admin' &&
        <Route exact path="/adminTests/update/:id" render={() => <AdminCreateTest isUpdate={true} />} />
      }


      {role === 'student' &&
        <Route exact path="/tests" component={StudentTestsPage}/>
      }
      {role === 'student' &&
        <Route exact path="/tests/:id" component={StudentPassTest}/>
      }

      <Route exact path="/education" component={Education} />
      <Route exact path="/documents" component={Documents} />

      <Route path="*" component={NotFoundPage} />

    </Switch>
  );
};
