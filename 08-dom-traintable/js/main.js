const searchForm = document.querySelector('#searchForm');

const handleSearchName = (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    console.log(searchForm.elements.search.value);
};

searchForm.addEventListener('submit', handleSearchName);