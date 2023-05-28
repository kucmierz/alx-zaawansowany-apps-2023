import logo from './logo.svg';
import './App.css';

// const Header = () => {
//   return (
//     <header>
//       Helllo World
//     </header>
//   )
// }

// Stworz komponent List i komponent Footer.

// Komponent Footer ma wyswietlac Hello + Twoje imie. Twoje imie zdefiniuj jako zmienna.

// Komponent List ma wyswietlac elementy listy z tablicy obiektow

// const name = 'Marek';

// const Footer = () => {
//   return (
//     <footer>
//       <p>Hello {name}</p>
//     </footer>
//   )
// }

// const todos = [
//   {
//     id: 1,
//     name: "Jest fajnie"
//   },
//   {
//     id: 2,
//     name: "Kurs ALX jest spoko"
//   }
// ];

// const List = () => {
//   return (
//     // wszystkie komponenty / fragmenty JSX musza byc wewnatrz jakiegos znacznika HTML
//     <div>
//       {todos.map(todo =>
//         <div key={todo.id}>{todo.name}</div>
//       )}</div>
//   )

// };


function App() {
  return (
    <div className="App">
      <h1>Welcome from App</h1>

      {/* <Header />
      <List />
      <Footer /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
