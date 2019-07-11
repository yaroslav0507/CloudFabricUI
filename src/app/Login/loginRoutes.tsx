import React from 'react';
import { Route } from 'react-router';
import { ForgotPasswordForm } from './forms/ForgotPasswordForm/ForgotPasswordForm';
import { LoginForm } from './forms/LoginForm/LoginForm';
import { LoginWrapper } from './LoginWrapper';

export const LoginRoutes = (
  <LoginWrapper>
    <Route path="/auth/login" exact={true} component={LoginForm}/>
    <Route path="/auth/forgot-password" exact={true} component={ForgotPasswordForm}/>
  </LoginWrapper>
);
