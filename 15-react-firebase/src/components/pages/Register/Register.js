import { useState } from "react"
import Main from "../../templates/Main/Main"
import InputField from "../../InputField/InputField";
import Button from "../../Button/Button";
import { createNewUser } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";
import ErrorP from "../../atoms/ErrorP/ErrorP";
import Title from "../../atoms/Title/Title";
import { Link } from "react-router-dom";

const Register = (props) => {
    const navigate = useNavigate();
    const [emailValue, setEmailValue] = useState('');
    const emailValueChange = event => {
        setEmailValue(event.target.value);
    };

    const [passwordValue, setPasswordValue] = useState('');
    const passwordValueChange = event => {
        setPasswordValue(event.target.value);
    };

    const [isLoginError, setIsLoginError] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const validation = () => {
        let isValid = false;
        setIsPasswordValid(false);

        if (passwordValue.length > 5) {
            isValid = true;
            setIsPasswordValid(true);
        }
        return isValid;
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(validation());
        setIsLoginError(false);
        if (!validation()) return;


        createNewUser(emailValue, passwordValue)
            .then(() => {
                navigate('/dashboard')
            })
            .catch(error => {
                setIsLoginError(true);
                console.log(error.message);
            })

    };

    return (
        <Main>
            <Title
                text="Register"
            />
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">Email:</label>
                <InputField
                    type="text"
                    value={emailValue}
                    onChange={emailValueChange}
                />
                <label htmlFor="password">Password:</label>
                <InputField
                    type="password"
                    value={passwordValue}
                    onChange={passwordValueChange}
                />
                <ErrorP
                    isError={!isPasswordValid}
                    errorMessage="Haslo musi skladac sie z minimum 6 znakow"
                />
                {isLoginError && <p>Niepoprawny login lub haslo</p>}
                <Button
                    type="submit"
                    text="Zarejestruj"
                />

                <strong>Masz juz konto?<Link to="/">Zaloguj sie</Link> </strong>
            </form>
        </Main>
    )
}

export default Register