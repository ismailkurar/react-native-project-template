import { LOADING_ACTIONS } from './LoadingActions';

const initialState = {};

export default function loading(state = initialState, action) {
  switch (action.type) {
    // Set loading status for different action keys.
    case LOADING_ACTIONS.SHOW_LOADING:
      return Object.assign({}, state, {
        [action.meta.watchedAction]: true
      });
    case LOADING_ACTIONS.HIDE_LOADING:
      return Object.assign({}, state, {
        [action.meta.watchedAction]: false
      });
    default:
      return state;
  }
}
