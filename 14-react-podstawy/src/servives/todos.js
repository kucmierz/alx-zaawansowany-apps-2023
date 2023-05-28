const TODO_URL = 'http://localhost:8000/todos';

export const getTodos = () => {
    return fetch(TODO_URL)
        .then(res => res.json())
}

export const addTodo = (newTodo) => {
    fetch(TODO_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTodo)
    })
}

export const removeTodo = (id) => {
    fetch(`${TODO_URL}/${id}`, {
        method: 'DELETE'
    })
}