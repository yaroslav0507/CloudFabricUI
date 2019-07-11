import React from 'react';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Logo from '../../images/CF-login-logo.svg';

export interface ILoginWrapperProps {
  children: any;
}

const LoginPage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 428px;
  background-color: #474747;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginForm = styled(Paper)`
  && {
    width: 392px;
    max-height: 100%;
    border-radius: 8px;
    background-color: #3A3A3A;
    padding: 20px;
    
    @media (min-width: 1024px) {
      padding: 40px;
      min-height: 428px;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  justify-content: center;
  
  @media (min-width: 1024px) {
    margin-bottom: 40px;
  }
`;

export const LoginWrapper: React.FunctionComponent<ILoginWrapperProps> = ({children}) => {
  return (
    <LoginPage>
      <LoginForm elevation={0}>
        <div>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>

          {children}
        </div>
      </LoginForm>
    </LoginPage>
  );
};
