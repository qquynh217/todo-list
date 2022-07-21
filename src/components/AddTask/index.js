import styles from "./AddTask.module.css"
import styleCard from "../share/card/Card.module.css"
function AddTask({ handleAddTask }) {
    return (
        <div
            className={styleCard.card + ' ' + styles.addTask}
            onClick={handleAddTask}
        >
            <p>+ Add task</p>
        </div>
    )
}
export default AddTask