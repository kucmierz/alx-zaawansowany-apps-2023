import Label from '../../atoms/Label/Label';
import styles from './TrainSearchForm.module.css'

const TrainSearchForm = props => {
    return (
        <form onSubmit={props.handleSearchForm} className={styles.searchForm}>
            <Label
                text='Wyszukaj po nazwie:'
            />
            <input
                type="text"
                value={props.searchInput}
                onChange={props.searchInputChange}
            />
            <button type="submit">Szukaj</button>
        </form>
    );
};

export default TrainSearchForm;