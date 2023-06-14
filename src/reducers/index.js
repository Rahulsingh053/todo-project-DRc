import { combineReducers } from 'redux';
import todoReducer from './todos';

const rootReducer = combineReducers({
  todos: todoReducer,
  // Other reducers...
});

export default rootReducer;