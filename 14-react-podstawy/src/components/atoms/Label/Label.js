import styles from './Label.module.css'


const Label = (props) => {
    return (
        <label className={styles.myLabel}>
            {props.text}
            {props.children}
        </label>
    );
}

export default Label;