const products = [
    {
        name: 'banan',
        price: 4.99
    },
    {
        name: "chleb",
        price: 3.25
    },
    {
        name: 'ser',
        price: 7.00
    },
    {
        name: 'baton',
        price: 1.99
    }
]

//   Za pomocą JS oblicz średnią cenę produktu oraz jego sumę produktow w koszyku.

// console.log('hello');
const getSum = (array) => {
    let sum = 0;
    array.forEach(element => {
        sum += element.price;
    });
    return sum;
};

const getAvg = (array) => {
    let sum = getSum(array);
    return (sum / array.length).toFixed(2);
}

console.log(`Suma cen: ${getSum(products)}`);
console.log(`Srednia cena: ${getAvg(products)}`);