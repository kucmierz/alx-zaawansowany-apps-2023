// obiekty wbudowane w przegladarke
//document - interfejs HTML w JS
// window - obiekt okna przegladarki
// jesli zdeklarujemy zmienn bez slowa var/let/const, to
// przypisujemy ja tak naprawde do obiektu window
// name = 'Damian'
// console.log(window.name)

// console.log(document);

// pobieranie elementow
// document.getElementById();
// document.getElementsByClassName();
// document.getElementsByName();
// document.querySelector();
// document.querySelectorAll();

// document.querySelector(selector);
// selector - selector CSS
// #id - id (uzywany najczesciej)
// .klasa - klasa css
// h1 - tag HTML
// ul li - element li wewnatrz elementu ul
// ul.klasa - ul o okreslonej klasie

const title = document.querySelector('#title');
// wlasciwosci zlapanego eleentu
console.log(title.innerText);//tresc zlapanego elementu
console.log(title.innerHTML);//zwraca HTML wewnatrz zlapanego elementu
// title.innerText = 'Nowy tekst';
title.innerHTML = '<i>Nowy tekst</i>';
title.id = 'Nowe-ID';
const image = document.querySelector('img');
image.src = 'https://cdn.myshoptet.com/usr/www.zuty.pl/user/shop/big/14716_malowanie-po-numerach---slodki-pregowany-kotek.png?624e1162';
image.style = 'width:50px;height:20px';
// klasy
title.classList.add('nowa-klasa');//dodawanie nowych elementow
title.classList.remove('nowa-klasa');//usuwanie nowych elementow
title.classList.toggle('nowa-klasa');//usuwanie / dodawanie nowych elementow
title.classList.contains('nowa-klasa'); // sprawdza czy jest dana klasa i zwraca true/false

// dodawanie / usuwanie elementow
// const body = document.querySelector('body');
// dodawanie
title.innerHTML += `
    <div>
        Hello World
    </div
    `;

//usuwanie
// czyszczenie elementu
title.innerHTML = '';
title.remove();//usuniecie elementu i jego zawartosci