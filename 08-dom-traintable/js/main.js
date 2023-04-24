const searchForm = document.querySelector('#searchForm');
const connectionsTable = document.querySelector('#connectionsTable');
const connectionForm = document.querySelector('#connectionForm');
const citySelect = document.querySelector('#citySelect');

// get data from localStorage
let connections = JSON.parse(localStorage.getItem('connections') ?? []);

const renderConnectionTable = (collectionToRender, renderElement) => {
    renderElement.innerHTML = '';
    collectionToRender.forEach(element => {
        renderElement.innerHTML += `
        <tr>
            <td>${element.cityFrom}</td>
            <td>${element.cityTo}</td>
            <td>${element.time}</td>
            <td>${element.date}</td>
            <td>${element.name}</td>
        </tr>
        `;
    });
};

const getUniqueCities = (collection) => {
    const cities = new Set();
    collection.forEach(element => {
        cities.add(element.cityFrom);
        cities.add(element.cityTo);
    });
    return Array.from(cities).sort();
};

const newOptionElement = (selectionHTML, value, text) => {
    const option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectionHTML.appendChild(option);
};

const feedSelection = (selectElement, collection) => {
    citySelect.innerHTML = '';
    // first, empty element, option
    newOptionElement(selectElement, '', '-- Wybierz --');
    collection.forEach(city => {
        newOptionElement(selectElement, city, city);
    });
};

feedSelection(citySelect, getUniqueCities(connections));

const searchConnectionsByName = (collection, phrase) => {
    return collection.filter(element => {
        return element.name.toLowerCase().includes(phrase);
    });
};

const searchConnectionByCity = (collection, selectedCity) => {
    return collection.filter(element => {
        return element.cityFrom === selectedCity || element.cityTo === selectedCity;
    });
};

const handleSearchName = (ev) => {
    ev.preventDefault();
    // console.log(ev.target);
    const connectionName = searchForm.elements.search.value.toLowerCase();
    renderConnectionTable(searchConnectionsByName(connections, connectionName), connectionsTable);
};

const handleNewConnection = (ev) => {
    ev.preventDefault();
    // console.log(ev.target.elements.from);
    const newConnection = {
        cityFrom: ev.target.elements.from.value,
        cityTo: ev.target.elements.to.value,
        time: ev.target.elements.time.value,
        date: ev.target.elements.date.value,
        name: ev.target.elements.name.value
    };
    connections.push(newConnection);
    localStorage.setItem('connections', JSON.stringify(connections));
    renderConnectionTable(connections, connectionsTable);
    connectionForm.reset();
};


const handleCitySelection = (ev) => {
    renderConnectionTable(searchConnectionByCity(connections, ev.target.value), connectionsTable);
};

renderConnectionTable(connections, connectionsTable);
searchForm.addEventListener('submit', handleSearchName);
connectionForm.addEventListener('submit', handleNewConnection);
citySelect.addEventListener('change', handleCitySelection);