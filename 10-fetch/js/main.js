// fetch - wbudowana metoda w przegladarkach do obslugi zapytan http. - domyslna akcje jest get

const catFactsList = document.querySelector('#catFactsList')
// fetch
// Domyslna akcja w fetch jest GET
// fetch zwraca Promise

const renderCats = (data) => {
  data.forEach(cat => {
    catFactsList.innerHTML += `
      <li> ${cat.text} </li>
    `
  })
}

const loadCats = () => {
  return fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
      return response.json()
    })
}

// tzw. laczenie Promisow
// po wywolaniu loadCats(), Promise i .then jest kontynuowane
loadCats().then(data => {
  renderCats(data)
})