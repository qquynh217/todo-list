import styles from "./TodoList.module.css"
import { AiOutlineClose } from "react-icons/ai";
import { BsPlusCircle } from "react-icons/bs";
import { useStore } from '../../store/hook';
import { addNewTodo, deleteTodo, toggleTodo } from "../../store/action";
import { useState } from "react";

function TodoList({ todoList, indexTask }) {
    const [state, dispatch] = useStore();
    //const { todos, todoInput, taskInput } = state;
    const [todoInput, setTodoInput] = useState("")
    return (
        <div className={styles.todoList}>
            <ul>
                {todoList.map((todo, index) => {
                    return (
                        <li
                            className={todo.isCompleted ? styles.completed : ""}
                            key={index}
                        >
                            <span onClick={() => { dispatch(toggleTodo(index, indexTask)) }}>{todo.nameTodo}</span>
                            <AiOutlineClose
                                className={styles.delTodo}
                                onClick={() => { dispatch(deleteTodo(index, indexTask)) }}
                            />
                        </li>
                    )
                })}
            </ul>
            <div className={styles.input}>
                <input
                    placeholder="Enter todo..."
                    value={todoInput}
                    onChange={(e) => { setTodoInput(e.target.value) }}
                    onKeyDown={(e) => {
                        if (e.keyCode == 13) {
                            dispatch(addNewTodo(todoInput, indexTask))
                            setTodoInput("")
                        }
                    }}
                />
                <BsPlusCircle
                    fontSize={20}
                    onClick={() => {
                        dispatch(addNewTodo(todoInput, indexTask))
                        setTodoInput("")
                    }}
                    cursor="pointer"
                />
            </div>
        </div>
    )
}
export default TodoList