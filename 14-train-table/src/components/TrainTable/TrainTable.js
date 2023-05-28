import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTrains, updateConnections } from '../../services/trains';

const TrainTable = () => {
    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [connections, setConnections] = useState([]);
    const [allConnections, setAllConnections] = useState([]);

    const cityFromChange = ev => { setCityFrom(ev.target.value); }
    const cityToChange = ev => { setCityTo(ev.target.value); }
    const timeChange = ev => { setTime(ev.target.value); }
    const dateChange = ev => { setDate(ev.target.value); }
    const nameChange = ev => { setName(ev.target.value); }

    const [searchInput, setSearchInput] = useState('');

    const searchInputChange = ev => { setSearchInput(ev.target.value); }

    const handleSearchForm = ev => {
        ev.preventDefault();
        const results = allConnections.filter(connection => {
            return connection.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        setConnections(results);
    }

    const setCollections = collection => {
        setAllConnections(collection);
        setConnections(collection);
    };

    useEffect(() => {
        getTrains()
            .then(data => {
                setCollections(data);
            })
    }
        , []);

    const handleNewConnection = ev => {
        ev.preventDefault();
        // console.log('submit');
        const newConnection = {
            id: uuidv4(),
            cityFrom: cityFrom,
            cityTo: cityTo,
            time: time,
            date: date,
            name: name
        };
        const newConnections = [
            ...connections,
            newConnection
        ];
        setCollections(newConnections);
        updateConnections(newConnection);
        setCityFrom('');
        setCityTo('');
        setName('');
    }


    return (
        <div>
            <form onSubmit={handleSearchForm}>
                <label>Wyszukaj po nazwie:</label>
                <input
                    type="text"
                    value={searchInput}
                    onChange={searchInputChange}
                />
                <button type="submit">Szukaj</button>
            </form>

            <form onSubmit={handleNewConnection}>
                <h2>Dodaj nowe połączenie:</h2>
                <label for="from">Z:</label>
                <input
                    type="text"
                    placeholder="np. Warszawa"
                    value={cityFrom}
                    onChange={cityFromChange}
                />
                <label for="to">Do:</label>
                <input
                    type="text"
                    placeholder="np. Lublin"
                    value={cityTo}
                    onChange={cityToChange}
                />
                <label for="time">Godzina:</label>
                <input
                    type="time"
                    value={time}
                    onChange={timeChange}
                />
                <label for="date">Data:</label>
                <input
                    type="date"
                    value={date}
                    onChange={dateChange}
                />
                <label for="name">Nazwa połączenia:</label>
                <input
                    type="text"
                    value={name}
                    onChange={nameChange}
                />
                <button type="submit">Dodaj</button>
            </form>

            <div>
                <label for="city">Wybierz miasto:</label>
                <select id="citySelect" name="city">
                    <option value="">-- Wybierz --</option>
                    <option value="Warszawa">Warszawa</option>
                    <option value="Lublin">Lublin</option>
                    <option value="Kraków">Kraków</option>
                </select>
                <label for="sort">Sortuj po dacie:</label>
                <select id="sortSelect" name="sort">
                    <option value="asc">Rosnąco</option>
                    <option value="desc">Malejąco</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Z</th>
                        <th>Do</th>
                        <th>Godzina</th>
                        <th>Data</th>
                        <th>Nazwa</th>
                    </tr>
                </thead>
                <tbody>

                    {connections.map(connection => {
                        return (
                            <tr key={connection.id}>
                                <td>{connection.cityFrom}</td>
                                <td>{connection.cityTo}</td>
                                <td>{connection.time}</td>
                                <td>{connection.date}</td>
                                <td>{connection.name}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default TrainTable;