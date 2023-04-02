/ Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

// Gotowe rozwiazanie wrzuc na GIT i wyslij link.

const people = [
    {
        name: "Michał",
        age: 12
    },
    {
        name: "Damian",
        age: 10
    },
    {
        name: "Wiktoria",
        age: 14
    },
    {
        name: "Agata",
        age: 8
    }
]

// Zakladam ze najstarsza osoba jest pierwszym elementem tablicy
let max = people[0];

// Nastepnie przechodze przez kazdy element tablicy
for (let person of people) {
    // Jesli element tablicy, przez ktory przechdoze jest wiekszy od obecnego maxa, zastepuje maxa
    if (max.age < person.age) {
        max = person;
    }
}

// po wykonaniu petli for, zmienna max zawiera najstarsza osobe
console.log(max.name);


// Final Output:

// Wiktoria




// Powtórka JS


// 1. Deklaracja zmiennych

let age = 0; // mozna nadpisac

const names = ["Damian", "Paweł", "Michał"] // stale (nie da sie nadpisac)


// Zakres zmiennych - blokowy

const name1 = "damian";

if (true) {
    console.log(name1); // damian
}

// ---------------------

// if(true) {
//   const name2 = "damian";
// }

// console.log(name2); // damian


// Typy zmiennych

// Proste

const name3 = 'Damian' //string
const age1 = 20 //number (number)
const age2 = 20.123 //number (float)
const isOlder = true // or false

// Specjalne

const TheBigestElement = null;
// console.log(nieIstniejacaZmienna) // undefined

// Zlozone

const names10 = ['Damian', 'Pawel'];

console.log(names10[0]) // pierwszy element
console.log(names10[names10.length - 1]) //ostatni element

// Dodawanie elementow do tablicy

names10.push('Adrian'); //push
names10.concat('Adrian'); //concat

[...names10, 'Adrian'] //spread operator

// Usuwanie elementow z tablicy

// *nie ma latwego sposobu na usuwanie elementow z tablicy obiektow. Do tego bedziemy uzywac petli lub funkcji filter

names10.slice(0) // Damian

// Obiekty

const person15 = {
    name: 'Damian',
    age: 20,
    isTall: true
}

// Odczyt

console.log(person15.age) // 20
console.log(person15['age']) // 20

// Zapis do obiektu

// trzeba uzyc nieistniejacego klucza
person15.shoeNumber = 43;

// Petle

// Petle sluza do tego, zeby przechodzic glownie przez tablice

const animals = [
    {
        name: "Fredek",
        type: 'cat'
    },
    {
        name: "Reksio",
        type: 'dog'
    },
]

// for
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i].name);
}

// for of
for (let animal of animals) {
    // animal === animals[i] w przypadku petli for
    console.log(animal.name);
}

// forEach
animals.forEach(animal => {
    console.log(animal.name);
})


// funkcje

// console.log('---- Ustawiamy Choinke ----')
// console.log('---- Dekorujemy Choinke ----')
// console.log('---- Sciagamy Choinke ----')

// console.log('---- Ustawiamy Dekoracje Wielkanocne ----')
// console.log('---- Dekorujemy Dekoracje Wielkanocne ----')
// console.log('---- Sciagamy Dekoracje Wielkanocne ----')

// Zapis funkcji za pomoca function

// function prepare(thing) {
//   console.log(`---- Ustawiamy ${thing} ----`)
//   console.log(`---- Dekorujemy ${thing} ----`)
//   console.log(`---- Sciagamy ${thing} ----`)
// }

const prepare = (thing) => {
    console.log(`---- Ustawiamy ${thing} ----`)
    console.log(`---- Dekorujemy ${thing} ----`)
    console.log(`---- Sciagamy ${thing} ----`)
}

prepare('Choinke');
prepare('Dekoracje Wielkanocne');
prepare('Dom na swieta');


// Zadanie z powtórki

// 1. Mając tablicę imion, dopisz do niej swoje imie. Nastepnie za pomoca metody tablica.length - 1, wypisz w konsoli swoje imie.

const names20 = ['Damian', 'Pawel', 'Michal']

// 2. Majac obiekt buta, sprawdz czy rozmiar jest wiekszy od 42. Jesli jest, to wypisz w konsoli "To jest duzy but"

const shoe50 = {
    brand: "nike",
    color: 'white',
    size: 40
}

// 3. Majac tablice produktów, oblicz sumę produktów, których kategoria to owoce

const products = [
    {
        name: 'jablko',
        category: 'fruits',
        price: 2.00
    },
    {
        name: 'kawa',
        category: 'other',
        price: 7.25
    },
    {
        name: 'banan',
        category: 'fruits',
        price: 4.99
    }
]

// 4. Napisz funkcje sumProducts, ktora przyjmie tablice obiektow products z zadania 3, a nastepnie zwroci sume wszystkich produktow