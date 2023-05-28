import styles from './Button.module.css'

const Button = (props) => {
    return (
        <button
            type={props.type}
            onClick={props.onClick}
            className={styles.myButton}
        >
            {props.text}
        </button>
    )
}

// wartosci domyslne kiedy nie zostana wartosci przekazane do komponentu
Button.defaultProps = {
    type: "button",
    text: "Send"
}

export default Button;