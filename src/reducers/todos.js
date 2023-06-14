// src/reducers/todoReducer.js
import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actions/todoAction';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
