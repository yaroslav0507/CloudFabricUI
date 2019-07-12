import React, { useState } from 'react';
import { History } from 'history';
import { Field, Formik, FormikProps } from 'formik';
import IconPerson from '../../../../images/baseline-person-24px.svg';
import IconPassword from '../../../../images/baseline-lock-24px.svg';
import { TextInputField } from '../../../shared/formFields/TextInputField';
import { Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { PasswordInputField } from '../../../shared/formFields/PasswordInputField';

export interface ILoginCredentials {
  login: string;
  password: string;
}

export interface ILoginFormProps {
  history: History;
  login(data: ILoginCredentials): Promise<void>;
}

const ForgotPasswordLink = styled(NavLink)`
  && {
    color: #fff;
    text-decoration: underline;
    font-size: 14px;
  }
`;

const CenteredGridItem = styled(Grid)`
  && {
    align-items: center;
    display: flex;
  }
`;

export const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const onSubmit = (values, formikActions) => {
    // 123
  };

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      onSubmit={(values, formikActions) => onSubmit(values, formikActions)}
      validationSchema={{}}
      validateOnBlur={false}
    >
      {(formikProps: FormikProps<ILoginCredentials>) => (
        <Grid container spacing={32}>
          <Grid item xs={12}>
            <Field
              placeholder="Username"
              name="login"
              adornment={<IconPerson/>}
              component={TextInputField}
            />
          </Grid>

          <Grid item xs={12}>
            <Field
              placeholder="Password"
              name="password"
              adornment={<IconPassword/>}
              component={PasswordInputField}
            />
          </Grid>

          <CenteredGridItem item xs={12} sm={8}>
            <ForgotPasswordLink to={'/auth/login'}>Forgot Password</ForgotPasswordLink>
          </CenteredGridItem>

          <Grid item xs={12} sm={4}>
            <NavLink to={'/'}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};
