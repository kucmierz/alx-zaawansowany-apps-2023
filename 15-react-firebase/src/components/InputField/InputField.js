const InputField = props => {
    return (
        <input
            type={props.text}
            value={props.value}
            onChange={props.onChange} />
    );
}

export default InputField