// 1. Napisz funkcje greeting(), ktora przyjmie jako argument imie a nastepnie zwroci "Hello + imie"
const greeting = (stringArgument) => {
    return `Hello ${stringArgument}`;
};
console.log(greeting('Teodor'));
// -----------------

// 2. Napisz funkcje sumElements(), ktora przyjmie tablice obiektow z polami name i price.
const products = [
    {
        name: "Bread",
        price: 9.99,
        category: "Bakery"
    },
    {
        name: "Banan",
        price: 3.25,
        category: "Fruits"
    },
    {
        name: "Jabłka",
        price: 4.00,
        category: "Fruits"
    }
];

const sumElements = (collection) => {
    return collection.map(element => element.price).reduce((sum, currentValue) => sum + currentValue, 0).toFixed(2);
};

console.log(`suma elementow: ${sumElements(products)}`);

// -----------------

// 3. Napisz funkcje getLetters(), ktora przyjmie tablice imion, a nastepnie zwroci tablice zawierajaca ile jest liter w kazdym slowie

// getLetters(['Damian', 'Ania']) -> [6,4]

const getLetters = (collection) => {
    const results = [];
    collection.forEach(element => {
        results.push(element.length);
    });
    return results;
};

console.log(`ilosc znakow: ${getLetters(['Marek', 'Damian', 'Ania'])}`);

// -----------------

// 4. Napisz funckje getTheMostExpensiveProduct, ktora przyjmie tablice z zadania 2 i zwróci obiekt, zawierający najdrozszy produkt

// getTheMostExpensiveProduct([{name:"Komputer", price: 100}, {name:"Lampa", price: 10}]) -> {name: "Komputer", price: 100}

const getTheMostExpensiveProduct = (collection) => {
    const product = collection.reduce((a, b) => a.price > b.price ? a : b, collection[0]);
    return product;
};

console.log(`najdrozszy produkt: `, getTheMostExpensiveProduct(products));

// -----------------

// 5. Napisz funkcje findNameIndex, ktora przyjmie tablice imion i imie, ktore ma wyszukac, a nastepnie zwroci indeks tego elementu

// findNameIndex(['Damian', 'Ania'], 'Ania') -> 1
// findNameIndex(['Damian', 'Ania'], 'Damian') -> 0

const findNameIndex = (collection, givenName) => {
    return collection.indexOf(collection.find(element => element === givenName));
};

console.log(findNameIndex(['Damian', 'Ania'], 'Ania'));
console.log(findNameIndex(['Damian', 'Ania'], 'Damian'));

const getSumOfFruits = (collections, category) => {
    return collections.filter(product => product.category === category).reduce((sum, currentValue) => sum + currentValue.price, 0);
};

const products3 = [
    {
        name: "Jablko",
        category: "Fruits",
        price: 4.99
    },
    {
        name: "Banan",
        category: "Fruits",
        price: 7.00
    },
    {
        name: "Chleb",
        category: "Bakery",
        price: 3.99
    }
];

console.log(`suma owocow: `, getSumOfFruits(products3, 'Fruits'));