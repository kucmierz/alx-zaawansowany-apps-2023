const TRAINS_URL = 'http://localhost:8000/trains';

export const getTrains = () => {
    return fetch(TRAINS_URL)
        .then(res => res.json())
}

export const updateConnections = (newConnection) => {
    fetch(TRAINS_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newConnection)
    });
};