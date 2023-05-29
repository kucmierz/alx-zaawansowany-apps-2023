import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTrains, updateConnections } from '../../../services/trains';
import TrainAddForm from '../../sections/TrainAddForm/TrainAddForm';
import TrainSearchForm from '../../sections/TrainSearchForm/TrainSearchForm';
import ConnectionsTable from '../../sections/ConnectionsTable/ConnectionsTable';
import Select from '../../atoms/Select/Select';
import Label from '../../atoms/Label/Label';

import styles from './TrainTable.module.css'

const TrainTable = () => {
    const [cityFrom, setCityFrom] = useState('');
    const [cityTo, setCityTo] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState(new Date());
    const [name, setName] = useState('');
    const [connections, setConnections] = useState([]);
    const [allConnections, setAllConnections] = useState([]);
    const [uniqueCities, setUniqueCities] = useState([]);

    // Set the default sort order
    const DEFAULT_SORT = 'asc';
    const sortOptions = [
        {
            key: 'asc',
            value: 'asc',
            text: 'Rosnąco'
        },
        {
            key: 'desc',
            value: 'desc',
            text: 'Malejąco'
        }
    ];

    const cityFromChange = ev => { setCityFrom(ev.target.value); }
    const cityToChange = ev => { setCityTo(ev.target.value); }
    const timeChange = ev => { setTime(ev.target.value); }
    const dateChange = ev => { setDate(ev.target.value); }
    const nameChange = ev => { setName(ev.target.value); }

    const [searchInput, setSearchInput] = useState('');

    const searchInputChange = ev => { setSearchInput(ev.target.value); }

    const citySelectChange = ev => {
        const selectedCity = ev.target.value;
        let results = allConnections.filter(connection => {
            return (connection.cityFrom === selectedCity || connection.cityTo === selectedCity);
        });
        if (selectedCity === '-- Wybierz --') results = allConnections;
        setConnections(results);
    };

    const handleSearchForm = ev => {
        ev.preventDefault();
        const results = allConnections.filter(connection => {
            return connection.name.toLowerCase().includes(searchInput.toLowerCase());
        })
        setConnections(results);
    }

    const setCollections = collection => {
        setAllConnections(collection);//array needed for search form
        setConnections(collection);
        setUniqueCities(getUniqueCities(collection));//array with unique cities for selection option
    };

    const getUniqueCities = collection => {
        const cities = new Set();
        cities.add('-- Wybierz --');
        collection.forEach(element => {
            cities.add(element.cityFrom);
            cities.add(element.cityTo);
        });
        const simpleArray = Array.from(cities).sort();
        return transformedArray(simpleArray);
    };

    const transformedArray = collection => {
        return collection.map(element => {
            return {
                key: element,
                value: element,
                text: element
            }
        }
        );
    };

    // Sort connections array by date
    const sortByDate = (collection, sortOrder) => {
        if (sortOrder === 'asc') {
            return collection.sort((a, b) => {
                return new Date(a.date) > new Date(b.date) ? 1 : -1;
            });
        } else {
            return collection.sort((a, b) => {
                return new Date(a.date) > new Date(b.date) ? -1 : 1;
            });
        }
    };

    const sortSelectChange = ev => {
        setCollections(sortByDate(connections, ev.target.value));//w konsoli otrzymuje posortowane wyniki, ale nie sa wyswietlane na stronie
        // setCollections(sortByDate(connections, ev.target.value));//sortowanie jest wyswietlane, ale jesli uzyjemy tego przy przefiltrowanych wynikach, wowczas nadpiszemy allConnections
    };

    useEffect(() => {
        getTrains()
            .then(data => {
                setCollections(sortByDate(data, DEFAULT_SORT));
            })
    }
        , []);

    const handleNewConnection = ev => {
        ev.preventDefault();
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
        <div className={styles.trainTable}>
            <TrainSearchForm
                handleSearchForm={handleSearchForm}
                searchInput={searchInput}
                searchInputChange={searchInputChange}
            />

            <TrainAddForm
                handleNewConnection={handleNewConnection}
                cityFrom={cityFrom}
                cityFromChange={cityFromChange}
                cityTo={cityTo}
                cityToChange={cityToChange}
                time={time}
                timeChange={timeChange}
                date={date}
                dateChange={dateChange}
                name={name}
                nameChange={nameChange}
            />

            <div className={styles.selectors}>
                <Label
                    text='Wybierz miasto:'
                />
                <Select
                    onChange={citySelectChange}
                    options={uniqueCities}
                />

                <Label
                    text='Sortuj po dacie:'
                />
                <Select
                    onChange={sortSelectChange}
                    options={sortOptions}
                />

            </div>
            <ConnectionsTable
                connections={connections}
            />
        </div>
    );
}
export default TrainTable;