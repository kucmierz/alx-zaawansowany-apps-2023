import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Chat.css';


// Stworz komponent Chat w pliku src/Chat.js i zaimportuj go do index.js.

// Komponent Chat powinien zawierac formularz, skladacy sie z 2 pol (author i message).
// Stworz interaktywny formularz i liste, gdzie uzytkownik bedzie mogl dodawac wiadomosci do chatu (i oczywiscie je czytac)





function Chat() {
    const [inputAuthor, setAuthor] = useState('');
    const [inputMessage, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        // const messagesFromLS = JSON.parse(localStorage.getItem('chatMessages')) ?? [];
        // setMessages(messagesFromLS);
        // setAllMessages(messagesFromLS);
        fetch('http://localhost:8000/messages')
            .then(res => res.json())
            .then(data => {
                setMessages(data);
                setAllMessages(data);
            })
    }, [])

    const handleAuthorChange = ev => {
        setAuthor(ev.target.value);
    };
    const handleMessageChange = ev => {
        setMessage(ev.target.value);
    };

    const handleSubmit = ev => {
        ev.preventDefault();
        // console.log('submit dziala');
        const newMessage = {
            id: uuidv4(),
            author: inputAuthor,
            message: inputMessage
        }
        const newMessages = [
            ...messages,
            newMessage
        ]
        setMessages(newMessages);
        setAllMessages(newMessages);
        // localStorage.setItem('chatMessages', JSON.stringify(newMessages));
        fetch('http://localhost:8000/messages', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMessage)
        })
        setAuthor('');
        setMessage('');
    };

    const handleSearchChange = ev => {
        setSearchValue(ev.target.value);
    };

    const handleSearch = ev => {
        ev.preventDefault();

        const output = allMessages.filter(message => {
            return message.message.toLowerCase().includes(searchValue.toLowerCase())
        });
        // console.log(output);
        setMessages(output);
        setSearchValue('');
    };

    const handleRemove = (id) => {
        const filteredMessages = messages.filter(message => message.id !== id);
        setMessages(filteredMessages);
        setAllMessages(filteredMessages);
        fetch(`http://localhost:8000/messages/${id}`, {
            method: 'DELETE'
        });
    };

    return (
        <div className='Chat-main-container'>
            <h1>Chat app</h1>
            <form onSubmit={handleSearch}>
                <label>Searching phrase:
                    <input
                        type='text'
                        value={searchValue}
                        onChange={handleSearchChange}
                    ></input>
                    <button type='submit'>Search</button>
                </label>
            </form>
            <form onSubmit={handleSubmit}>
                <label>
                    Author
                    <input
                        type="text"
                        value={inputAuthor}
                        onChange={handleAuthorChange}
                    />
                </label>
                <label>
                    Message
                    <input
                        type="text"
                        value={inputMessage}
                        onChange={handleMessageChange}
                    />
                </label>
                <button type="submit">Send</button>
            </form>

            <ul>
                {
                    messages.map(message => {
                        return (
                            <li key={message.id}>
                                <span className='author'>{message.author}</span>
                                <span className='message'>{message.message}</span>
                                <button onClick={() => handleRemove(message.id)}>X</button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    );

}

export default Chat;