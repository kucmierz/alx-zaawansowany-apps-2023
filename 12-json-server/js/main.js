const trainTable = document.querySelector('#trainTable');
const addTrainForm = document.querySelector('#addTrainForm');
const searchForm = document.querySelector('#searchForm');


const state = {
    trains: [],
    filteredTrains: []
}

const setTrainState = (newTrainState) => {
    state.trains = newTrainState
    renderTrains(newTrainState);
}

const renderTrains = (collection) => {
    trainTable.innerHTML = '';
    collection.forEach(train => {
        trainTable.innerHTML += `
        <tr>
            <td>${train.date}</td>
            <td>${train.from}</td>
            <td>${train.name}</td>
            <td>${train.time}</td>
        </tr>
    `;
    });
}

const loadTrains = () => {
    return fetch('http://localhost:8000/trains')
        .then(response => {
            return response.json()
        })
}

const getData = () => {
    loadTrains().then(data => {
        // state.trains = data;
        // console.log(data);
        // renderTrains(data);
        setTrainState(data);
    })
}

const saveTrain = (train) => {
    fetch('http://localhost:8000/trains', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(train)
    });
}
const handleSubmit = (ev) => {
    ev.preventDefault();

    const newTrainRoute = {
        from: addTrainForm.elements.from.value,
        to: addTrainForm.elements.to.value,
        name: addTrainForm.elements.name.value,
        date: addTrainForm.elements.date.value,
        time: addTrainForm.elements.time.value,
    }

    //wysylamy dane - dodanie polaczenia do db
    saveTrain(newTrainRoute);
    //dorzucenie elementu do listy
    state.trains.push(newTrainRoute);
    renderTrains(state.trains);
    addTrainForm.reset();
}

const handleSearch = (ev) => {
    ev.preventDefault();
    const phrase = searchForm.elements.search.value.toLowerCase();
    state.filteredTrains = state.trains.filter(train => {
        return train.name.toLowerCase().includes(phrase);
    });
    renderTrains(state.filteredTrains);
}

getData();
addTrainForm.addEventListener('submit', handleSubmit);
searchForm.addEventListener('submit', handleSearch);