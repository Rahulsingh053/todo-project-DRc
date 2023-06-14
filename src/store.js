// src/store.js

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todos';

const rootReducer = combineReducers({
  todo: todoReducer,
  // other reducers...
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
