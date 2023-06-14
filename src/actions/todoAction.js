// src/actions/todoActions.js
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Date.now(),
            title: todo?.title,
            description: todo?.description,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id,
    };
};

export const editTodo = (todo) => {
    return {
        type: EDIT_TODO,
        payload: {
            todoId: todo?.id,
            todoTitle: todo?.title,
            todoDescription: todo?.description,
        },
    };
};

// src/actions/todoActions.js

export const FETCH_TODO_LIST_SUCCESS = "FETCH_TODO_LIST_SUCCESS";
export const FETCH_TODO_LIST_FAILURE = "FETCH_TODO_LIST_FAILURE";

export const fetchTodoList = () => {
    return (dispatch) => {
        try {
            // Perform the necessary logic to fetch the todo list
            const todoList = // fetch the todo list data
                dispatch({ type: FETCH_TODO_LIST_SUCCESS, payload: todoList });
        } catch (error) {
            dispatch({ type: FETCH_TODO_LIST_FAILURE, payload: error.message });
        }
    };
};

// src/actions/todoActions.js
export const FETCH_TODOS = "FETCH_TODOS";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";

export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
    };
};

export const fetchTodosSuccess = (todos) => {
    return {
        type: FETCH_TODOS_SUCCESS,
        payload: todos,
    };
};

export const fetchTodosFailure = (error) => {
    return {
        type: FETCH_TODOS_FAILURE,
        payload: error,
    };
};

// Add other actions as needed
