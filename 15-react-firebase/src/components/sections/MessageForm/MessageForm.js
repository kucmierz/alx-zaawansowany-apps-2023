import Button from "../../Button/Button";
import InputField from "../../InputField/InputField";

// aby skorzystac z context:
import { useContext } from "react"
import { GlobalContext } from "../../../contexts/global"

const MessageForm = props => {
    const state = useContext(GlobalContext);
    console.log(state);//odczyt zmiennej z contextu

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