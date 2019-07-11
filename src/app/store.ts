import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { rootReducer, IRootState } from './appReducer';

const composeEnhancers = (
  process.env.NODE_ENV === 'development' &&
  // @ts-ignore
  window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

export const browserHistory = createBrowserHistory();

export const routerMiddleware = createRouterMiddleware(browserHistory);

function configureStore(initialState?: IRootState) {
  // configure middlewares
  const middlewares = [
    routerMiddleware,
    thunk
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}

// pass an optional param to rehydrate state on app start
export const store = configureStore();

// export store singleton instance
export default store;
