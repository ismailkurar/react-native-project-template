import { combineReducers } from 'redux';

import loginReducer from '../modules/login-screen/LoginReducer';
import homeReducer from '../modules/home/HomeReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  home: homeReducer
});

export default rootReducer;
