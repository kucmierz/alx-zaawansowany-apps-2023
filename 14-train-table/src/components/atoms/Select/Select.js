import styles from './Select.module.css'

const Select = props => {
    return (

        <select onChange={props.onChange} className={styles.select}>
            {props.options.map(option => {
                return (
                    <option key={option.key} value={option.value}>
                        {option.text}
                    </option>
                );
            })
            }
        </select>
    );
};

export default Select;