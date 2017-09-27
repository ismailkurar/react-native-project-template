import React from 'react';

import { Provider } from 'react-redux';
import reduxStore from './common/reduxStore';
import Routes from './routes/Routes';

const App = () => (
  <Provider store={reduxStore.store}>
    <Routes />
  </Provider>
);

export default App;