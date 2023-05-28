import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Chat.css';
import { getMessages, addMessage, removeMessage } from '../../../servives/messages';
import MessageList from '../../sections/MessageList/MessageList'
import MessageForm from '../../sections/MessageForm/MessageForm';
import MessageFormSearch from '../../sections/MessageFormSearch/MessageFormSearch';

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
        getMessages()
            .then(data => {
                saveMessages(data);
                // setMessages(data);
                // setAllMessages(data);
            })
    }, [])

    const saveMessages = (messages) => {
        setMessages(messages);
        setAllMessages(messages);
    }

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
        addMessage(newMessage);
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
        // setMessages(filteredMessages);
        // setAllMessages(filteredMessages);
        saveMessages(filteredMessages);
        removeMessage(id);
    };

    return (
        <div className='Chat-main-container'>
            <h1>Chat app</h1>
            <MessageFormSearch
                handleSearch={handleSearch}
                searchValue={searchValue}
                handleSearchChange={handleSearchChange}
            />
            {/* <form onSubmit={handleSearch}>
                <label>Searching phrase:
                    <input
                        type='text'
                        value={searchValue}
                        onChange={handleSearchChange}
                    ></input>
                    <button type='submit'>Search</button>
                </label>
            </form> */}

            <MessageForm
                handleSubmit={handleSubmit}
                inputAuthor={inputAuthor}
                handleAuthorChange={handleAuthorChange}
                inputMessage={inputMessage}
                handleMessageChange={handleMessageChange}
            />
            {/* <form onSubmit={handleSubmit}>
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
            </form> */}

            <MessageList
                messages={messages}
                handleRemove={handleRemove}
            />
            {/* <ul>
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
            </ul> */}

        </div>
    );

}

export default Chat;