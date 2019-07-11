import axios from 'axios';
import { IAuthTokenResponse } from '../Login/loginActions';

export const setAuthorizationToken = (token?: IAuthTokenResponse) => {
  if (token) {
    const storedToken = localStorage.authToken && JSON.parse(localStorage.authToken);

    if ((storedToken && storedToken.access_token) !== token.access_token) {
      localStorage.setItem('authToken', JSON.stringify(token));
    }

    axios.defaults.headers.common.authorization = `${token.token_type} ${token.access_token}`;
  } else {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common.authorization;
  }
};
