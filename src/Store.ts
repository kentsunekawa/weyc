import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AppReducer from './AppReducers';
import TodoReducer from './TodoReducder';
import UserReducer from './UserReducer';

const middlewares = [thunk, logger];
const store = createStore(
  combineReducers({
    app: AppReducer,
    todo: TodoReducer,
    user: UserReducer
  }),
  applyMiddleware(...middlewares)
);

export default store;