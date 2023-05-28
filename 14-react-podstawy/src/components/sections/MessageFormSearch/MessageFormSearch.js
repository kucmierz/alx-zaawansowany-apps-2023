const MessageFormSearch = (props) => {
    return (
        <form onSubmit={props.handleSearch}>
            <label>Searching phrase:
                <input
                    type='text'
                    value={props.searchValue}
                    onChange={props.handleSearchChange}
                ></input>
                <button type='submit'>Search</button>
            </label>
        </form>
    );
}

export default MessageFormSearch;