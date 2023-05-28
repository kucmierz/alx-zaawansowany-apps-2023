import styles from './ErrorSpan.module.css'

const ErrorSpan = (props) => {
    console.log('in error');
    console.log(props.showError);
    if (!props.showError) return null
    return (
        <span className={styles.errorText}>{props.errorMsg}</span>
    );
}

ErrorSpan.defaultProps = {
    showError: false,
    errorMsg: "The field cannot be empty"
}

export default ErrorSpan;