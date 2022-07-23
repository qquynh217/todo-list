import * as actions from "./constant";
export const addNewTask = (payload) => ({
    type: actions.ADD_NEW_TASK,
    payload
})
export const setTaskInput = (payload) => ({
    type: actions.SET_TASK_INPUT,
    payload
})
export const deleteTask = (payload) => ({
    type: actions.DELETE_TASK,
    payload
})
export const editTask = (payload, index) => ({
    type: actions.EDIT_TASK,
    payload,
    index
})
export const setTodoInput = (payload) => ({
    type: actions.SET_TODO_INPUT,
    payload,
})
export const addNewTodo = (payload, index) => ({
    type: actions.ADD_NEW_TODO,
    payload,
    index
})
export const deleteTodo = (indexTodo, indexTask) => ({
    type: actions.DELETE_TODO,
    indexTodo,
    indexTask
})
export const toggleTodo = (indexTodo, indexTask) => ({
    type: actions.TOGGLE_TODO,
    indexTodo,
    indexTask
})
export const setInitState = (payload) => ({
    type: actions.INIT_STATE,
    payload
})
