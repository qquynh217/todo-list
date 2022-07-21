import styles from './Card.module.css'
function Card({ children, handleSubmit, style }) {
    return (
        <div
            className={styles.card}
            onClick={handleSubmit}
            style={style}
        >
            {children}
        </div>
    )
}
export default Card