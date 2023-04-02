// Napisz funkcje o nazwie getTheOldestPerson, ktora obliczy, ktora osoba jest najstarsza w podanej tablicy obiektow. Imie osoby najstarszej, wypisz w konsoli

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

// Final Output:

// Wiktoria

const getTheOldestPerson = (array) => {
    let oldestPerson = array[0];

    array.forEach(people => {
        if (people.age > oldestPerson.age) {
            oldestPerson = people;
        }
    });
    return oldestPerson.name;
};

console.log(getTheOldestPerson(people));

// Zadanie z powtórki

// 1. Mając tablicę imion, dopisz do niej swoje imie. Nastepnie za pomoca metody tablica.length - 1, wypisz w konsoli swoje imie.

const names20 = ['Damian', 'Pawel', 'Michal']

names20.push('Marek');
console.log(`Moje imie to: ${names20[names20.length - 1]}`);

// 2. Majac obiekt buta, sprawdz czy rozmiar jest wiekszy od 42. Jesli jest, to wypisz w konsoli "To jest duzy but"

const shoe50 = {
    brand: "nike",
    color: 'white',
    size: 40
}
const shoe51 = {
    brand: "adidas",
    color: 'red',
    size: 42
}
if (shoe50.size === 42) {
    console.log('To jest duzy but');
}
if (shoe51.size === 42) {
    console.log('To jest duzy but');
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

let fruitsSum = 0;
for (let product of products) {
    if (product.category === 'fruits') {
        fruitsSum += product.price;
    }
}
console.log(`Suma wszystkich fruits: ${fruitsSum}`);

const fruitsOnly = products.filter(product => product.category === 'fruits');
let sum2 = 0;
for (let fruit of fruitsOnly) {
    sum2 += fruit.price;
}
console.log(sum2);

// 4. Napisz funkcje sumProducts, ktora przyjmie tablice obiektow products z zadania 3, a nastepnie zwroci sume wszystkich produktow

const sumProducts = (array) => {
    let sum = 0;
    for (let element of array) {
        sum += element.price;
    }
    return sum;
};

console.log(`Suma wszystkich produktow: ${sumProducts(products)}`);