import { useEffect, useState } from 'react';
import styles from './Dashboard.module.css'
import { v4 as uuidv4 } from 'uuid';
import { getMessages, saveMessage } from '../../../services/firebase'

const Dashboard = () => {
    const [authorValue, setAuthorValue] = useState('');

    const authorValueChange = event => {
        setAuthorValue(event.target.value);
    }

    const [messageValue, setMessageValue] = useState('');

    const messageValueChange = event => {
        setMessageValue(event.target.value);
    }
    const [isMessageValid, setIsMessageValid] = useState(true);

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // const messagesFromLS = JSON.parse(localStorage.getItem('messages')) ?? [];
        // setMessages(messagesFromLS);
        getMessages(handleData)//to rozwiazanie stosujemy dlatego, gdyz firebase getMessages nie jest asynchroniczna
    }, [])
    // tzw funkcja callback, wywolywana jest za kazdym razem, jak sa zmieniane dane w firebase
    const handleData = (db_messages) => {
        setMessages(db_messages);
    }

    const formValidation = () => {
        let isValid = false;
        setIsMessageValid(false);
        if (messageValue.length > 3) {
            isValid = true;
            setIsMessageValid(true);
        }
        return isValid;
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (!formValidation()) return;

        const newMessage = {
            id: uuidv4(),
            author: authorValue,
            message: messageValue
        }

        setMessages([...messages, newMessage]);
        saveMessage(newMessage);
        // localStorage.setItem('messages', JSON.stringify([...messages, newMessage]));
        setAuthorValue('');
        setMessageValue('');
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="author">Autor:</label>
                    <input
                        type="text"
                        value={authorValue}
                        onChange={authorValueChange} />
                </div>
                <div>
                    <label htmlFor="message">Wiadomość:</label>
                    <textarea
                        value={messageValue}
                        onChange={messageValueChange}>
                    </textarea>
                    {!isMessageValid ? <p>Wiadomosc musi zawierac minimum 4 znaki</p> : null}
                </div>
                <div>
                    <button type="submit">Wyślij</button>
                </div>
            </form>

            <ul>
                {
                    messages.map(msg => {
                        return (
                            <li key={msg.id}>
                                <span>{msg.author}</span> wrote:
                                <p>{msg.message}</p>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    );
}

export default Dashboard