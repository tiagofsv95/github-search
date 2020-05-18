import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Result from '../pages/Result';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        // render={(props) => <Dashboard {...props} />}
        component={Main}
      />

      <Route
        path="/notFound/:user"
        // render={(props) => <Repository {...props} />}
        component={NotFound}
      />

      <Route
        path="/result/:user"
        // render={(props) => <Repository {...props} />}
        component={Result}
      />
    </Switch>
  );
};

export default Routes;
