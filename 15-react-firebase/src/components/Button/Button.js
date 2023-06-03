import styles from './Button.module.css'
const Button = props => {
    return (
        <button
            type={props.type}
            className={styles.submitButton}
        >
            {props.text}
        </button>
    );
}
export default Button