const ErrorP = props => {
    return (
        <div>{
            props.isError &&
            <p>
                {props.errorMessage}
            </p>
        }
        </div>
    );
}

export default ErrorP