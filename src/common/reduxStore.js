import { createStore, applyMiddleware } from 'redux';

import rootReducer from './rootReducer';
import promiseMiddleware from './promiseMiddleware';

class ReduxStore {
  constructor() {
    this.store = createStore(rootReducer,
      applyMiddleware(promiseMiddleware));
  }
}

export default new ReduxStore();
