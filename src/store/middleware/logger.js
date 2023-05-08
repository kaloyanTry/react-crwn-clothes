export const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  next(action);
};
// use it if do not want to use logger [middleware] in store.js
