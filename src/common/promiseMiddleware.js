import { isFSA } from 'flux-standard-action';

const isPromise = (val) => (
  val && typeof val.then === 'function'
);

export default ({ dispatch }) => (
  (next) => (action) => {
    let functionResult;

    if (isFSA(action)) {
      if (isPromise(action.payload)) {
        functionResult = action.payload;

        action.payload.then(
          (result) => {
            const payloadResult = result;
            return dispatch({ ...action, payload: payloadResult });
          },
          (error) => {
            dispatch({ ...action, payload: error, error: true });
            console.error('Network error', error);
          }
        );
      } else {
        functionResult = next(action);
      }
    } else {
      console.warn('This action is not FSA compatible!', action);
      functionResult = isPromise(action)
        ? action.then(dispatch)
        : next(action);
    }

    return functionResult;
  }
);
