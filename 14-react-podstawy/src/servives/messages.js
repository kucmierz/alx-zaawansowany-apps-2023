const MESSAGE_URL = 'http://localhost:8000/messages';


export const getMessages = () => {
    return fetch(MESSAGE_URL)
        .then(res => res.json())
};

export const addMessage = (newMessage) => {
    fetch(MESSAGE_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    });
};

export const removeMessage = (id) => {
    fetch(`${MESSAGE_URL}/${id}`, {
        method: 'DELETE'
    });
};