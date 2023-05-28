import styles from './Input.module.css'

const Input = (props) => {
    return (
        <input
            className={styles.input}
            type={props.text}
            value={props.value}
            onChange={props.onChange}
        />
    );
}
export default Input;