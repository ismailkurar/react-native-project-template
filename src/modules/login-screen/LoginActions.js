import LoginApi from './LoginApi';

export const LOGIN_ACTIONS = {
  LOGIN: 'LOGIN'
};

export const login = (data) => ({
  type: LOGIN_ACTIONS.LOGIN,
  payload: LoginApi.login(data)
});