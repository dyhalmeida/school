import React from 'react';
import { Switch } from 'react-router-dom';
import CustomRoute from './CustomRoute';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <Switch>
      <CustomRoute path="/login" exact component={Login} />
      <CustomRoute path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
