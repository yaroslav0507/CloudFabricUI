import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// tslint:disable:no-import-side-effect
// side-effect imports here
import 'babel-polyfill';
import 'url-search-params-polyfill';
import 'formdata-polyfill';
import 'moment-timezone';
import './styles/main.scss';
import './app/utils/yupMethods';
// tslint:enable:no-import-side-effect

import { App } from './app/App';
import { store, browserHistory } from './app/store';

declare const System: {
  import<T = any>(module: string): Promise<T>;
};

export const isLocalEnvironment = window.location.host.indexOf('localhost') < 0;

/**
 * Next constants are replaced on the CI when deploying to a specific environment
 * Make sure to change the deployment configuration before you change them
 */
export const BASE_URL = process.env.REACT_APP_BASE_URL || 'https://sf-uat01.approveengine.com';
export const IDENTITY_URL = process.env.REACT_APP_IDENTITY_URL || 'https://identity-uat.approveengine.com';

/**
 * Returns full base url with http(s)://host/
 */
export const getBaseUrl = () => {
  let baseUrl = BASE_URL;

  if (baseUrl.indexOf('http') < 0) {
    baseUrl = window.location.origin + baseUrl;
  }

  if (baseUrl && baseUrl[baseUrl.length - 1] !== '/') {
    baseUrl += '/';
  }

  return baseUrl;
};

axios.defaults.baseURL = BASE_URL;

const renderRoot = (app: JSX.Element) => {
  ReactDOM.render(app, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'production') {
  renderRoot(<App store={store} history={browserHistory} />);
} else {
  // removed in production, hot-reload config
  // tslint:disable-next-line:no-var-requires
  const AppContainer = require('react-hot-loader').AppContainer;

  renderRoot(
    <AppContainer warnings={false}>
      <App store={store} history={browserHistory} />
    </AppContainer>
  );

  if (module.hot) {
    // app
    module.hot.accept('./app/App', async () => {
      // const NextApp = require('./app').App;
      const NextApp = (await System.import('./app/App')).App;
      renderRoot(
        <AppContainer>
          <NextApp store={store} history={browserHistory} />
        </AppContainer>
      );
    });

    // reducers
    module.hot.accept('./app/appReducer', () => {
      const newRootReducer = require('./app/appReducer').default;
      store.replaceReducer(newRootReducer);
    });
  }
}
