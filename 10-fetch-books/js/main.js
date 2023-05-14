// fetch - wbudowana metoda w przegladarkach do obslugi zapytan http. - domyslna akcje jest get

// Stworz aplikacje, ktore bedzie renderowala ksiazke z podanego endpointa
// https://openlibrary.org/works/OL45804W.json

// Na stronie zawrzyj: tytul i opis

const bookList = document.querySelector('#bookList');
// fetch
// Domyslna akcja w fetch jest GET
// fetch zwraca Promise

// const renderBooks = (collection) => {
//   collection.forEach(book => {
//     bookList.innerHTML += `
//     <li>
//       <p>${book.title}</p>
//       <span>${book.description}</span>
//     </li>
//     `
//   })
// }

const renderBook = (bookData) => {
  bookList.innerHTML += `
    <li>
      <p>${bookData.title}</p>
      <span>${bookData.description}</span>
    </li>
    `
}

const loadBooks = () => {
  return fetch('https://openlibrary.org/works/OL45804W.json')
    .then((response) => {
      return response.json()
    })
}

loadBooks().then(data => {
  console.log(data);
  renderBook(data);
})