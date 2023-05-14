// Promise - jest to wbudowany obiekt w js do obslugi asynchronicznosci w aplikacjach (komunikacja z realnymi serwerami)

// fetch('http://example.com/data')


const getData = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: 'Udalo sie', code: 200 });
        }, time)
    })
}
console.log(getData(2000));

// aby dostac sie do ewentualnych danych, a nie do promisu, wywolujemy na naszej metodzie "then"
console.log('wczytuje dane...');
getData(2000).then(data => {
    console.log('promise po 2000 ', data);
})

console.log('jestem na dole pliku');

getData(1000).then(data => {
    console.log('promise po 1000 ', data);

}).catch(error => {
    console.log(error);
})