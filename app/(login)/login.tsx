import React from 'react';
import LoginView from '../../components/login/loginView';

type Props = {
  setIsAuthenticated: (value: boolean) => void;
};

const Login = ({ setIsAuthenticated }: Props) => {
  return <LoginView setIsAuthenticated={setIsAuthenticated} />;
};

export default Login;
