export const LOADING_ACTIONS = {
  SHOW_LOADING: 'SHOW_LOADING',
  HIDE_LOADING: 'HIDE_LOADING'
};

export function showLoading(actionType) {
  return {
    type: LOADING_ACTIONS.SHOW_LOADING,
    meta: {
      watchedAction: actionType
    }
  };
}

export function hideLoading(actionType) {
  return {
    type: LOADING_ACTIONS.HIDE_LOADING,
    meta: {
      watchedAction: actionType
    }
  };
}
