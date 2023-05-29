import styles from './ConnectionsTable.module.css'

const ConnectionsTable = props => {
    return (
        <table className={styles.connectionTable}>
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

                {props.connections.map(connection => {
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
    );
};

export default ConnectionsTable;