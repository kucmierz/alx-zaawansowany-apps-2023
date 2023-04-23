const movieContainer = document.querySelector('#movieContainer');
const searchForm = document.querySelector('#searchForm');
const movieSortSelect = document.querySelector('#movieSortSelect');

const DEFAULT_SORT = 'desc';

const renderMovies = (moviesToRender) => {
    movieContainer.innerHTML = "";

    moviesToRender.forEach(movie => {
        movieContainer.innerHTML += `
      <div class="movie">
        <img src="${movie.poster}" alt="Tytuł filmu">
        <h2>${movie.title}</h2>
        <div class="year">Rok produkcji: ${movie.year}</div>
        <p>${movie.description}</p>
      </div>
    `
    })
}

const filterMoviesByTitle = (collection, phrase) => {
    // const results = [];

    // collection.forEach((item) => {
    //   if(item.title.toLowerCase().includes(phrase.toLowerCase())) {
    //     results.push(item);
    //   }
    // })

    // return results;

    return collection.filter(item => {
        return item.title.toLowerCase().includes(phrase.toLowerCase())
    })
}

const sortMoviesByDate = (collection, option) => {
    return collection.sort((prev, next) => {
        if (option === 'desc') {
            return prev.year > next.year ? -1 : 1
        }

        return prev.year > next.year ? 1 : -1
    })
}

const handleSearch = (event) => {
    event.preventDefault();

    const phrase = searchForm.elements.search.value;
    const filteredMovies = filterMoviesByTitle(movies, phrase);
    renderMovies(filteredMovies);
}

const handleSort = (event) => {
    // Zeby pobrac opcje, ktora opcja selecta zostala wybrana, potrzebuje skorzystac z event.target.value
    const selectedOption = event.target.value
    const sortedMovies = sortMoviesByDate(movies, selectedOption)
    renderMovies(sortedMovies)
}

const movies = sortMoviesByDate([
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Dziecko Rosemary',
        year: 1960,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Django',
        year: 1980,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Rekinado',
        year: 2015,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Pszczółka Maja',
        year: 2010,
        description: 'Opis filmu lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci scelerisque, finibus erat sit amet, ullamcorper metus.'
    }
], DEFAULT_SORT);

renderMovies(movies);

searchForm.addEventListener('submit', handleSearch)
// na select jest mozliwy event change
movieSortSelect.addEventListener('change', handleSort)