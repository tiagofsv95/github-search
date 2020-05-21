import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import NotFound from '../pages/NotFound';
import Result from '../pages/Result';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />

      <Route path="/notFound/:user" component={NotFound} />

      <Route path="/result/:user" component={Result} />
    </Switch>
  );
};

export default Routes;
