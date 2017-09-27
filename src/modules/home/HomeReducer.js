import { HOME_ACTIONS } from './HomeActions';

const initialState = {
  dummyData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_ACTIONS.GET_MOCK_DATA: {
      return { ...state, dummyData: !action.payload.error ? action.payload.data : null  };
    }
    default:
      return state;
  }
}
