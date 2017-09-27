import React from 'react';

import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from '../modules/login-screen/LoginContainer';
import Home from '../modules/home/HomeContainer';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} hideNavBar={true} />
      <Scene key="home" component={Home} title="Home Screen"/>
    </Stack>
  </Router>
);

export default Routes;