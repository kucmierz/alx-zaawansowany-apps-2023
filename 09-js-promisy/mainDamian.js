// Promise

// Promise jest to wbudowany obiekt w JS, ktory sluzy do obslugi asynchronicznosci w aplikacjach (komunikacja z realnymi serwerami)

const getData = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ message: 'NIe Udało się', code: 401 })
      }, time)
    })
  }
  
  // Promise
  
  // Promise na 3 stany:
  
  // - pending
  // - fullfiled (udalo sie)
  // - rejected (nie udalo sie)
  
  console.log('wczytuje dane...')
  
  getData(3000)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
  
  console.log('jestem na dole pliku')