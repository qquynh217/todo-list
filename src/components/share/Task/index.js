import { Progress } from 'antd';
import React, { useRef, useState } from 'react';
import styles from "./Task.module.css"
import stylesCard from "../card/Card.module.css"
import { AiFillEdit, AiOutlineClose, AiOutlineUnorderedList, AiOutlineCheck } from "react-icons/ai";
import { useStore } from '../../store/hook';
import { editTask } from '../../store/action';
import TodoList from '../TodoList';

function Task(props) {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;
    const [isOpen, setIsOpen] = useState(false)
    const [taskInput, setTaskInput] = useState("")
    const inputRef = useRef()
    const nameRef = useRef()
    const editBtn = useRef()
    const completedBtn = useRef()
    const toggleEdit = () => {
        inputRef.current.classList.toggle('display')
        nameRef.current.classList.toggle('display')
        editBtn.current.classList.toggle('display')
        completedBtn.current.classList.toggle('display')
        inputRef.current.focus()
    }
    const handleEdit = () => {
        dispatch(editTask(taskInput, props.index))
        toggleEdit()
    }
    return (
        <div className={styles.task + ' ' + stylesCard.card}>
            <div className={styles.title}>
                <p
                    className={styles.nameTask}
                    ref={nameRef}
                >{props.nameTask}</p>
                <input className='display'
                    placeholder={props.nameTask}
                    ref={inputRef}
                    value={taskInput}
                    onChange={(e) => { setTaskInput(e.target.value) }}
                />
                <Progress
                    format={() => (props.completedTodos + "/" + props.numberOfWork)}
                    percent={props.completedTodos / props.numberOfWork * 100}
                    strokeColor={{
                        '0%': '#ddd6f3',
                        '100%': '#faaca8',
                    }}
                    trailColor='#0000000a'
                    status='active'
                />
                <div className={styles.tools}>
                    <div
                        className={styles.toolTab}
                        onClick={toggleEdit}
                        ref={editBtn}
                    >
                        <AiFillEdit color='grey' />
                        <span>Edit</span>
                    </div>
                    <div
                        className={styles.toolTab + " display"}
                        ref={completedBtn}
                        onClick={handleEdit}
                    >
                        <AiOutlineCheck color='grey' />
                        <span>Completed</span>
                    </div>
                    <div className={styles.toolTab} onClick={props.handleDelete}>
                        <AiOutlineClose color='grey' />
                        <span>Delete</span>
                    </div>
                    <div
                        className={styles.toolTab}
                        onClick={() => { setIsOpen(val => (val === true ? false : true)) }}
                    >
                        <AiOutlineUnorderedList color='gray' />
                    </div>
                </div>
            </div>
            {isOpen &&
                <TodoList
                    todoList={props.todoList}
                    indexTask={props.index}
                />}
        </div>
    )
}
export default Task