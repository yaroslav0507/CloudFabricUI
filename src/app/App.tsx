import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import { History } from 'history';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../styles/theme';
import { IRootState } from './appReducer';
import { Routes } from './Routes/Routes';

interface IAppComponentProps {
  store: Store<IRootState | undefined>;
  history: History;
}

export class App extends React.Component<IAppComponentProps, {}> {
  render() {
    const {store, history} = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <ConnectedRouter
            store={store}
            history={history}
          >
            <Routes />
          </ConnectedRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}
