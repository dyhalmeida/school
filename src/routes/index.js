import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';

import Login from '../pages/Login';
import Student from '../pages/Student';
import Students from '../pages/Students';
import Photos from '../pages/Photos';
import Register from '../pages/Register';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/" exact component={Students} restricted={false} />
      <CustomRoute
        path="/student/:id/edit"
        exact
        component={Student}
        restricted
      />
      <CustomRoute path="/student" exact component={Student} restricted />
      <CustomRoute path="/photos/:id" exact component={Photos} restricted />
      <CustomRoute
        path="/register"
        exact
        component={Register}
        restricted={false}
      />
      <CustomRoute path="/login" exact component={Login} restricted={false} />
      <CustomRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
