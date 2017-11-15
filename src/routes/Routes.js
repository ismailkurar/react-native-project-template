import React from 'react';

import { Router, Scene, Stack } from 'react-native-router-flux';

import Login from '../modules/login-screen/LoginContainer';
import Home from '../modules/home/HomeContainer';
import ChartDemo from '../modules/chart-demo/ChartDemo';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} hideNavBar={true} />
      <Scene key="home" component={Home} title="Home Screen"/>
      <Scene initial key="chartDemo" component={ChartDemo} title="Chart Demo"/>
    </Stack>
  </Router>
);

export default Routes;