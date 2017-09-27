import HomeApi from './HomeApi';

export const HOME_ACTIONS = {
  GET_MOCK_DATA: 'GET_MOCK_DATA'
};

export const getMockData = () => ({
  type: HOME_ACTIONS.GET_MOCK_DATA,
  payload: HomeApi.getMockData()
});