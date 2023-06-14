import { combineReducers } from 'redux';
import todoReducer from './todos';

const rootReducer = combineReducers({
  todos: todoReducer,
  user:useReducer
  // Other reducers...
});

export default rootReducer;