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
        if (people.age>oldestPerson.age) {
            oldestPerson=people;
        }
    });
    return oldestPerson.name;
};

console.log(getTheOldestPerson(people));