const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <label>
                Author
                <input
                    type="text"
                    value={props.inputAuthor}
                    onChange={props.handleAuthorChange}
                />
            </label>
            <label>
                Message
                <input
                    type="text"
                    value={props.inputMessage}
                    onChange={props.handleMessageChange}
                />
            </label>
            <button type="submit">Send</button>
        </form>
    );
}
export default MessageForm;