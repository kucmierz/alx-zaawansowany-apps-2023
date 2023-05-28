import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTodos, addTodo, removeTodo } from '../../../servives/todos';
import './App.css';
import TodoList from '../../sections/TodoList/TodoList';
import TodoForm from '../../sections/TodoForm/TodoForm';
import Header from '../../atoms/Header/Header';

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
  const [showError, setShowError] = useState(false);
  // let showError = false;

  // useEffect jest to funkcjonalnosc komponentow, pozwalajaca na odpalenie jakies funkcji/kawalka kodu w zdefiniowanym przez nas momencie.

  // w useEffect robimy zapytania do localStorage lub bazy danych
  useEffect(() => {
    // const todosFromLS = JSON.parse(localStorage.getItem('todos')) ?? [];
    // setTodos(todosFromLS)

    getTodos()
      .then(data => {
        setTodos(data);
      })
  }, [])
  // pusta tablica oznacza, ze useEffect wykona sie tylko raz, po pierwszym zaladowaniu komponentu.


  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue === '') {
      // alert('The field cannot be empty');
      setShowError(true);
      // console.log(showError);
      return;
    }

    const newTodo = {
      id: uuidv4(),
      name: inputValue
    }

    const newTodos = [...todos, newTodo]

    setTodos(newTodos);

    addTodo(newTodo);

    // localStorage.setItem('todos', JSON.stringify(newTodos));

    setInputValue('');
  }

  const handleTaskNameChange = (event) => {
    // event.target.value = to co uzytkownik wpisuje do inputa

    // kazdorazowo uruchomienie funkcji do zmiany stanu powoduje przeladowanie komponentu
    setInputValue(event.target.value);
    setShowError(false);
  }

  const handleRemove = (id) => {
    const filteredTasks = todos.filter(todo => todo.id !== id);

    setTodos(filteredTasks);
    // localStorage.setItem('todos', JSON.stringify(filteredTasks))

    removeTodo(id);
  }

  return (
    <div className="App">
      <Header
        text='Welcome from App'
      />
      {/* <h1>Welcome from App</h1> */}
      <TodoForm
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        handleTaskNameChange={handleTaskNameChange}
        showError={showError}
        // errorMsg='Empty!!'
      />

      {/* <form onSubmit={handleSubmit}>
        <label>
          Task Name
          <input
            type="text"
            value={inputValue}
            onChange={handleTaskNameChange}
          />
        </label>
        <button type="submit">Send</button>
      </form> */}

      <TodoList
        todos={todos}
        handleRemove={handleRemove}
      />
      {/* <ul>
        {todos.map(todo => {
          return (
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleRemove(todo.id)}>X</button>
            </li>
          )
        })}
      </ul> */}

      {/* <Header></Header>
      <List />
      <Footer/> */}
    </div>
  );
}


export default App;