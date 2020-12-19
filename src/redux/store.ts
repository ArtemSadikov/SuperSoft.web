import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from './reducers/rootReducer';

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development",
  collapsed: true,
  timestamp: true,
});

export const useStore = (_initialState: any) => {
  const enhancer = compose(applyMiddleware(loggerMiddleware));
  return createStore(reducer, _initialState, enhancer);
};
