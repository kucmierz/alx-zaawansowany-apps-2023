const movies = [
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Avatar 2',
        year: 2023,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, expedita reiciendis. Optio consequuntur cupiditate voluptates illo, accusantium distinctio laudantium quidem sint doloribus necessitatibus, assumenda, provident mollitia ut error? Sequi, magnam.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Rambo',
        year: 1981,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, expedita reiciendis. Optio consequuntur cupiditate voluptates illo, accusantium distinctio laudantium quidem sint doloribus necessitatibus, assumenda, provident mollitia ut error? Sequi, magnam.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Top Gun',
        year: 1990,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, expedita reiciendis. Optio consequuntur cupiditate voluptates illo, accusantium distinctio laudantium quidem sint doloribus necessitatibus, assumenda, provident mollitia ut error? Sequi, magnam.'
    },
    {
        poster: 'https://via.placeholder.com/150x200',
        title: 'Swiety Mikolaj',
        year: 2021,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, expedita reiciendis. Optio consequuntur cupiditate voluptates illo, accusantium distinctio laudantium quidem sint doloribus necessitatibus, assumenda, provident mollitia ut error? Sequi, magnam.'
    }
];

const movieContainer = document.querySelector('#movieContainer');
const searchForm = document.querySelector('#searchForm');
const movieSortSelect = document.querySelector('#movieSortSelect');

const DEFAULT_SORT = 'desc';


const renderMovies = (moviesToRender) => {
    movieContainer.innerHTML = '';
    moviesToRender.forEach(movie => {
        movieContainer.innerHTML += `
        <div class="movie">
        <img src="${movie.poster}" alt="Tytuł filmu">
        <h2>${movie.title}</h2>
        <div class="year">Rok produkcji: ${movie.year}</div>
        <div class="date-added">Data dodania: 01.01.2022</div>
        <p>Opis filmu ${movie.description}</p>
    </div>
        `;
    });
};

const filterMoviesByTitle = (collection, phrase) => {
    return collection.filter(item => {
        return item.title.toLowerCase().includes(phrase.toLowerCase());
    })
};

const handleSearch = (ev) => {
    ev.preventDefault();
    const phrase = searchForm.elements.search.value;
    console.log(filterMoviesByTitle(movies, phrase));
    renderMovies(filterMoviesByTitle(movies, phrase));
};

const sortMoviesByDate = (collection, option) => {
    return collection.sort((a, b) => {
        if (option === 'desc') {
            return a.year > b.year ? -1 : 1;
        } else {
            return a.year > b.year ? 1 : -1;
        }
    });
};


const handleSort = (ev) => {
    ev.preventDefault();
    // console.log(ev.target.value);
    const selectedOption = ev.target.value;
    renderMovies((sortMoviesByDate(movies, selectedOption)));
};

renderMovies(movies);
searchForm.addEventListener('submit', handleSearch);
movieSortSelect.addEventListener('change', handleSort);