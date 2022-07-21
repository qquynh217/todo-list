import * as actions from "./constant";
import { taskContructor, todoContructor } from "./taskContructor";

export const initState = {
    todos: [],
    todoInput: "",
    taskInput: ""
}
function reducer(state, action) {
    switch (action.type) {
        case actions.SET_TASK_INPUT:
            return {
                ...state,
                taskInput: action.payload
            }
        case actions.ADD_NEW_TASK:
            return {
                ...state,
                todos: [...state.todos, taskContructor(action.payload, [])]
            }
        case actions.DELETE_TASK:
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        case actions.EDIT_TASK:
            state.todos[action.index].nameTask = action.payload
            return {
                ...state,
                taskInput: ""
            }
        case actions.SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case actions.ADD_NEW_TODO:
            state.todos[action.index].todoList.push(todoContructor(action.payload, false))
            return {
                ...state,
                todoInput: ""
            }
        case actions.DELETE_TODO:
            let newTask = [...state.todos[action.indexTask].todoList]
            newTask.splice(action.indexTodo, 1)
            state.todos[action.indexTask].todoList = newTask
            return {
                ...state
            }
        case actions.TOGGLE_TODO:
            const status = state.todos[action.indexTask].todoList[action.indexTodo].isCompleted
            state.todos[action.indexTask].todoList[action.indexTodo].isCompleted = status === true ? false : true
            return {
                ...state
            }

        default:
            break;
    }
}
export default reducer