import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router';
import { CreateClient } from './CreateClient';

export const ClientRoutes = (
  <Fragment>
    <Route
      exact={true}
      path="/dashboard/create-client"
      component={CreateClient}
    />
  </Fragment>
);
