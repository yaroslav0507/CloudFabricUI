import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ClientRoutes } from '../modules/Client/clientRoutes';
import { LoginRoutes } from '../Login/loginRoutes';
import { Layout } from '../Layout/Layout';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/auth">
      {LoginRoutes}
    </Route>

    <Layout>
      {ClientRoutes}
    </Layout>
  </Switch>
);
