import {createStore, applyMiddleware, Middleware} from 'redux';
import rootReducer from './modules/rootReducer';

export default (middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  const store = createStore(rootReducer, enhancer);
  return store;
};
