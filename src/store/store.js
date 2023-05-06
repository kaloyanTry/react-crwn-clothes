import { compose, legacy_createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  next(action);
};

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

const middleWares = [loggerMiddleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers
);
