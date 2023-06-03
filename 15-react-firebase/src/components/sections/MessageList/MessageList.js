import MessageListItem from "../MessageListItem/MessageListItem";
import styles from './MessageList.module.css'

const MessageList = props => {
    return (
        <ul>
            {
                props.messages.map(msg => {
                    return (
                        <MessageListItem
                            id={msg.id}
                            author={msg.author}
                            message={msg.message}
                        />
                        // <li key={msg.id}>
                        //     <span>{msg.author}</span> wrote:
                        //     <p>{msg.message}</p>
                        // </li>
                    )
                })
            }
        </ul>
    );
}

export default MessageList