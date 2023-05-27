import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React by dzialas utworzyl jezyk JSX - polaczenie js, html

// zwykly js
const name = 'Marek';
// w JSX moge zdefiniowac zmienna jako lancuch JSX i go pozniej zaladowac
const Greetings = <div><h1>Hellow from greetings</h1></div>;

const tasks = [
    {
        id: 1,
        name: "Jest fajnie"
    },
    {
        id: 2,
        name: "Ale fajny dzien w ALX"
    }
];

const handleClick = () => {
    console.log('sdfghjk');
};


root.render(
    <React.StrictMode>
        {/* a tu jest JSX */}
        <div>
            {/* wstrzykiwanie zmiennych */}
            <h1>Hello {name}</h1>
            {/* eventy onClick, onSubmit, onChange (przy inputach) */}
            <p onClick={handleClick}>text</p>
            {Greetings}
        </div>
        {/* w JSX wszystkie znaczniki HTML musza byc zakonczenie/zamkniete */}
        {/* w klamrach kod/tekst bedzie wykonywany */}
        <h2>Ilosc sekund to {60 - 30}</h2>
        {/* Operator trojargumentowy - sposob na if/else wewnatrz JSX */}
        <h2>Ilosc sekund to {true ? 60 : 90}</h2>

        {/* jesli chcemy nic nie wyswietlac, to musimy zwrocic null */}
        <h3>Ilosc sekund to {true ? null : 30}</h3>

        {/* Zeby zaladowac dane z js do JSX musimy uzyc funkcji map */}
        {/* kazdy element listy ktory ladujemy musi miec atrybut key */}
        {/* atrybut key musi byc uzywany w pierwszym tagu JSX zwracanym w funkcji map i sluzy do identyfikacji elementow zeby np. przy usuwaniu wiedzial ktory element usunac */}
        {tasks.map(task => {
            return (
                <div key={task.id}>{task.name}</div>
            )
        })}

        {/* wartosc rownowazna, skrocona */}
        {/* {tasks.map(task =>
      <div>{task.name}</div>
    )} */}

        {/* w JSX niektore atrybuty zapisuje sie inaczej */}
        {/* slowo class jest slowem zablokowanym, w JSX mamy className */}
        <div className='container'></div>

        {/* stylowanie w JSX */}
        <div style={{
            margin: "20px",
            border: "1px solid black"
        }}></div>
    </React.StrictMode>
);


