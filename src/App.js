import './App.css';
import * as actions from "./components/store/action"
import { useStore } from './components/store/hook';
import Task from './components/share/Task';
import AddTask from './components/AddTask';

function App() {
  const [state, dispatch] = useStore();
  const { todos, todoInput, taskInput } = state;
  return (
    <div className="App">
      <AddTask
        handleAddTask={() => {
          dispatch(actions.addNewTask("New Task"))
        }}
      />
      <div className='todoList'>
        {
          todos.map((value, index) => {
            return (
              <Task
                key={index}
                handleDelete={() => { dispatch(actions.deleteTask(index)) }}
                nameTask={value.nameTask}
                completedTodos={value.completedTodos()}
                numberOfWork={value.numberOfWork()}
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
