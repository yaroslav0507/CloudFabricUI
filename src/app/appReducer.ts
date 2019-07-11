import { combineReducers } from 'redux';
import { routerReducer as router, RouterState } from 'react-router-redux';

export interface IAppReducers {
}

export interface IRootState {
  router: RouterState;
  app: IAppReducers;
}

const appReducer = combineReducers<IRootState>({
  router,
  app: combineReducers({
  })
});

// Clears redux state on logout
export const rootReducer = (state: any, action: any) => {
  if (action.type === `AUTH/LOG_OUT`) {
    state = undefined;
  }

  return appReducer(state, action);
};
