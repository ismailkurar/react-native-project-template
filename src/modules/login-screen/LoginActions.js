import LoginApi from './LoginApi';

export const LOGIN_ACTIONS = {
  LOGIN: 'LOGIN',
  GET_MOCK_DATA: 'GET_MOCK_DATA'
};

export const login = (data) => ({
  type: LOGIN_ACTIONS.LOGIN,
  payload: new Promise((resolve, reject) => {
    const response = {
      data: null
    };

    setTimeout(() => {
      if (data.password === '12345') {
        response.data = true;

        resolve(response);
      } else {
        response.data = null;
        response.error = 'Failed to login';

        reject(new Error('Wrong password'));
      }
    }, 2000);
  })
});

export const getMockData = () => ({
  type: LOGIN_ACTIONS.GET_MOCK_DATA,
  payload: LoginApi.getMockData()
});