import Label from '../../atoms/Label/Label';
import styles from './TrainAddForm.module.css'

const TrainAddForm = props => {
    return (
        <form onSubmit={props.handleNewConnection} className={styles.newConnection}>
            <h2>Dodaj nowe połączenie:</h2>
            <Label
                text='Z:'
            />
            <input
                type="text"
                placeholder="np. Warszawa"
                value={props.cityFrom}
                onChange={props.cityFromChange}
            />
            <Label
                text='Do:'
            />

            <input
                type="text"
                placeholder="np. Lublin"
                value={props.cityTo}
                onChange={props.cityToChange}
            />
            <Label
                text='Godzina:'
            />

            <input
                type="time"
                value={props.time}
                onChange={props.timeChange}
            />
            <Label
                text='Data:'
            />

            <input
                type="date"
                value={props.date}
                onChange={props.dateChange}
            />
            <Label
                text='Nazwa połączenia:'
            />

            <input
                type="text"
                value={props.name}
                onChange={props.nameChange}
            />
            <button type="submit">Dodaj</button>
        </form>
    );
};

export default TrainAddForm;