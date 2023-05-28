const MessageList = (props) => {
    return (
        <ul>
            {
                props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            <span className='author'>{message.author}</span>
                            <span className='message'>{message.message}</span>
                            <button onClick={() => props.handleRemove(message.id)}>X</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default MessageList;