import { put, takeEvery } from 'redux-saga/effects';

export function* watchTodoActions() {
    yield takeEvery('ADD_TODO', addTodoSaga);
    yield takeEvery('UPDATE_TODO', saveTodo);
}

function* saveTodoToDatabase(todo) {
    yield new Promise((resolve) => setTimeout(resolve, 1000));

    return { ...todo, saved: true };
}
function* addTodoSaga(action) {
    const { payload: todo } = action;

    try {
        const savedTodo = yield saveTodoToDatabase(todo);

        yield put({ type: 'ADD_TODO_SUCCESS', payload: savedTodo });
    } catch (error) {
        yield put({ type: 'ADD_TODO_ERROR', error: error.message });
    }
}

function* updateTodoSaga(action) {
    const { payload: todo } = action;

    try {
        const updatedTodo = yield saveTodoToDatabase(todo);

        yield put({ type: 'UPDATE_TODO_SUCCESS', payload: updatedTodo });
    } catch (error) {

        yield put({ type: 'UPDATE_TODO_ERROR', error: error.message });
    }
}