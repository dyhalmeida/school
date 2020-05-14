import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Page404 from '../pages/Page404';

function Routes() {
  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  );
}

export default Routes;
