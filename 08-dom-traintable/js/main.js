const searchForm = document.querySelector('#searchForm');
const connectionsTable = document.querySelector('#connectionsTable');

// get data from localStorage
let connections = JSON.parse(localStorage.getItem('connections') ?? []);

// localStorage.setItem('connections', JSON.stringify(connections));
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

const searchConnectionsByName = (collection, phrase) => {
    return collection.filter(element => {
        return element.name.toLowerCase().includes(phrase);
    });
};

const handleSearchName = (ev) => {
    ev.preventDefault();
    // console.log(ev.target);
    const connectionName = searchForm.elements.search.value.toLowerCase();
    renderConnectionTable(searchConnectionsByName(connections, connectionName), connectionsTable);
};


renderConnectionTable(connections, connectionsTable);
searchForm.addEventListener('submit', handleSearchName);