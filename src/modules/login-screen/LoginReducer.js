import { LOGIN_ACTIONS } from './LoginActions';

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ACTIONS.LOGIN: {
      return { ...state, isLoggedIn: !action.payload.error  };
    }
    default:
      return state;
  }
}
