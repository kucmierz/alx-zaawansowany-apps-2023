console.log('Hello DOM');

// Obiekty wbudowane w przeglądarke

// document - interfejs HTML w JavaScripcie
// console.log(document); // obiekt, trzymajacy interakcje z HTML

// window - obiekt okna przegladarki
// console.log(window);

// * Jesli nie mamy zadnego slowa przed wbudowana funkcja, to znajduje sie ona w obiekcie window
// localStorage === window.localStorage

// Jesli zdeklarujemy zmienna bez slowa var/let/const to przypisujemy ja tak naprawde do obiektu window

// name = 'Damian';
// console.log(window.name)



// 1. Pobieranie elementow

// document.querySelector('selector')

// selector - selector CSS

// #id - id (UZYWANY NAJCZESCIEJ)
// .klasa - klasa CSS
// h1 - tag HTML
// ul li - element li wewnatrz elementu ul
// ul.klasa - ul o okreslnej klasie

{/* <ul>
  <li></li>
</ul> */}

// Zlapanie elementu

const title = document.querySelector('#title')

// Wlasciwosci zlapanego elementu

// Treść

console.log(title.innerText); // tresc zlapanego elementu
console.log(title.innerHTML); //zwraca HTML wewnatrz zlapanego elementu

// title.innerText = 'Nowy tekst';
title.innerHTML = '<i> Nowy tekst </i>';

// Atrybuty

console.log(title.id) // odczytanie atrybutu id
title.id = 'Nowe-ID'

// const image = document.querySelector('img');

// image.src = 'https://drukowanki.pl/wp-content/uploads/2020/01/jak-narysowac-psa-kolorowanka-01.jpg';


// Klasa

title.classList.add('nowa-klasa') // dodawanie nowych elementow
title.classList.remove('nowa-klasa') // usuwanie nowych elementow
title.classList.toggle('nowa-klasa') // dodawanie/usuwanie nowych elementow
title.classList.contains('nowa-klasa') // sprawdza czy jest dana klasa i zwraca true/false


// Dodawanie/usuwanie elementow

// Dodawanie
title.innerHTML += `
  <div>
    Hello World
  </div>
`
// Usuwanie

title.innerHTML = ''; // czyszczenie zawartosci elementu
// title.remove() // usuniecie elementu