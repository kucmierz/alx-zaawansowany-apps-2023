import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

// const Header = () => {
//   return (
//     <header>
//       Hello World
//     </header>
//   )
// }

// // Stworz komponent List i komponent Footer.

// // Komponent Footer ma wyswietlac Hello + Twoje imie. Twoje imie zdefiniuj jako zmienna.

// // Komponent List ma wyswietlac elementy listy z tablicy obiektow

// const todos = [
//   {
//     id: 1,
//     name: "Jest fajnie"
//   },
//   {
//     id: 2,
//     name: "Kurs ALX jest spoko"
//   }
// ]

// const name = 'Damian';

// const Footer = () => {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   )
// }

// const List = () => {
//   return (
//     // Wszystkie Komponenty/Fragmenty JSX musza byc wewnatrz jakiegos znacznika HTML
//     <ul>
//       {todos.map(todo => (
//         <li key={todo.id}>{todo.name}</li>
//       ))}
//     </ul>
//   )
// }

function App() {
  // jak wywolac useState
  // const [zmienna_ze_stanu, funkcja_zmieniajaca_stan] = useState(wartosc_poczatkowa_stanu)
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  // useEffect jest to funkcjonalnosc komponentow, pozwalajaca na odpalenie jakies funkcji/kawalka kodu w zdefiniowanym przez nas momencie.

  // w useEffect robimy zapytania do localStorage lub bazy danych
  useEffect(() => {
    // const todosFromLS = JSON.parse(localStorage.getItem('todos')) ?? [];
    // setTodos(todosFromLS)

    fetch('http://localhost:8000/todos')
      .then(res => res.json())
      .then(data => {
        setTodos(data);
      })
  }, [])
  // pusta tablica oznacza, ze useEffect wykona sie tylko raz, po pierwszym zaladowaniu komponentu.


  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuidv4(),
      name: inputValue
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos);

    fetch('http://localhost:8000/todos', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTodo)
    })

    // localStorage.setItem('todos', JSON.stringify(newTodos));

    setInputValue('');
  }

  const handleTaskNameChange = (event) => {
    // event.target.value = to co uzytkownik wpisuje do inputa

    // kazdorazowo uruchomienie funkcji do zmiany stanu powoduje przeladowanie komponentu
    setInputValue(event.target.value);
  }

  const handleRemove = (id) => {
    const filteredTasks = todos.filter(todo => todo.id !== id);

    setTodos(filteredTasks);
    // localStorage.setItem('todos', JSON.stringify(filteredTasks))

    fetch(`http://localhost:8000/todos/${id}`, {
      method: 'DELETE'
    })
  }

  return (
    <div className="App">
      <h1>Welcome from App</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Task Name
          <input
            type="text"
            value={inputValue}
            onChange={handleTaskNameChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>

      <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleRemove(todo.id)}>X</button>
            </li>
          )
        })}
      </ul>

      {/* <Header></Header>
      <List />
      <Footer/> */}
    </div>
  );
}


export default App;