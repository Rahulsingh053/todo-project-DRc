// src/reducers/todoReducer.js
import {
    FETCH_TODOS,
    FETCH_TODOS_SUCCESS,
    FETCH_TODOS_FAILURE,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
} from "../actions/todoAction";

const initialState = {
    todos: [],
    error: null,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TODOS:
            return {
                ...state,
            };
        case FETCH_TODOS_SUCCESS:
            return {
                ...state,
                todos: action.payload,
            };
        case FETCH_TODOS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_TODO:
            const { id, title, description } = action.payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: id,
                        title: title,
                        description: description,
                    },
                ],
            };
        case DELETE_TODO:
            const newTodoList = state.todos.filter((item) => item.id != action.id);
            return {
                ...state,
                todos: newTodoList,
            };
        case EDIT_TODO:
            const { todoId, todoTitle, todoDescription } = action.payload;
            const todos = state.todos.filter((todo) => {
                return todo.id !== Number(todoId);
            });

            const todo = state.todos.find((todo) => todo?.id === Number(todoId));
            todo.title = todoTitle;
            todo.description = todoDescription;
            todos.push(todo);
            return {
                ...state,
                todos: [...todos],
            };

        default:
            return state;
    }
};

export default todoReducer;
