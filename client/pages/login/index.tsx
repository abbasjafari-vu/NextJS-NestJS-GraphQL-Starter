import * as React from 'react';
import LoginButtons from 'components/LoginButtons';
import App from 'components/App';
import styled from 'styled-components';

function LoginPage() {
  return (
    <App title="Login" description="">
      <LoginButtons />
    </App>
  );
}

export default LoginPage;