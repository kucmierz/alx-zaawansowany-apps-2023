import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";


const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <label htmlFor="author">Autor:</label>
                <InputField
                    type="text"
                    value={props.authorValue}
                    onChange={props.authorValueChange}
                />
                {/* <input
                    type="text"
                    value={authorValue}
                    onChange={authorValueChange} /> */}
            </div>
            <div>
                <label htmlFor="message">Wiadomość:</label>
                <InputField
                    type="text"
                    value={props.messageValue}
                    onChange={props.messageValueChange}
                />
                {/* <input
                    type="text"
                    value={messageValue}
                    onChange={messageValueChange}
                /> */}
                {!props.isMessageValid ? <p>Wiadomosc musi zawierac minimum 4 znaki</p> : null}
            </div>
            <div>
                <Button
                    type="submit"
                    text="Wyślij"
                />
                {/* <button type="submit">Wyślij</button> */}
            </div>
        </form>
    );
}

export default MessageForm