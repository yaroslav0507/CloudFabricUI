import React from 'react';
import { Fragment } from 'react';
import { Route } from 'react-router';
import { CreateClient } from './CreateClient';
import { ClientPage } from './ClientPage/ClientPage';

export const ClientRoutes = (
  <Fragment>
    <Route
      exact={true}
      path="/clients/create"
      component={CreateClient}
    />

    <Route
      exact={true}
      path="/clients/client/:clientName"
      component={ClientPage}
    />
  </Fragment>
);
