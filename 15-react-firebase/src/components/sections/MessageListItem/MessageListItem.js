import styles from './MessageListItem.module.css'

const MessageListItem = props => {
    return (
        <li key={props.id} className={styles.listElem}>
            <span>{props.author}</span> wrote:
            <p>{props.message}</p>
        </li>
    );
}
export default MessageListItem