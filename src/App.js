import './App.css';
import * as actions from "./components/store/action"
import { useStore } from './components/store/hook';
import Task from './components/share/Task';
import AddTask from './components/AddTask';
import { useEffect } from 'react';
import { completedTodo } from './components/store/taskContructor';

function App() {
  const [state, dispatch] = useStore();
  const { todos, taskInput } = state;
  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem("todoListQ"))
    if (storeData != null) {
      dispatch(actions.setInitState(storeData));
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("todoListQ", JSON.stringify(state))
  }, [state])
  return (
    <div className="App">
      <AddTask
        handleAddTask={() => {
          dispatch(actions.addNewTask("New Task"))
        }}
      />
      <div className="todoList">
        {todos &&
          todos.map((value, index) => {
            return (
              <Task
                key={index}
                handleDelete={() => { dispatch(actions.deleteTask(index)) }}
                nameTask={value.nameTask}
                completedTodos={completedTodo(value.todoList)}
                numberOfWork={value.todoList.length}
                taskInput={taskInput}
                index={index}
                todoList={value.todoList}
              >
                <input placeholder='Enter task...' />
              </Task>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
