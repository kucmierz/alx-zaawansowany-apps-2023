import styles from './Label.module.css'

const Label = props => {
    return (
        <label className={styles.label}>{props.text}</label>
    );
};

Label.defaultProps = {
    text: ''
};

export default Label;