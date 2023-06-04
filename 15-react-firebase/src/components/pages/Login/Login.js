// Napisz komponent Login zawierajacy formularz z dwoma polami: email i password. Funkcja handleSubmit niech wyswietli w konsoli login i hasło wpisane do inputów (jeśli walidacja jest poprawna)

import { useState } from "react";
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom";
import InputField from "../../InputField/InputField";
import Button from '../../Button/Button'
import { login } from "../../../services/firebase";
import Main from '../../templates/Main/Main'


// Dodaj walidacje do formularza, ze jesli email jest pusty to wyswietl pod inputem taki komunikat

// Dodaj walidacje do formularza, ze haslo musi miec wiecej niz 6 znakow. Wyswietl komunikat pod inputem

// Dodaj plik Login.styles.css i dodaj style do wiadomosci walidacyjnej (tresc niech bedzie czerwona)


const Login = () => {
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(true);
    const [isLoginError, setIsLoginError] = useState(false);
    const navigate = useNavigate();


    const emailChange = (event) => {
        const emailValue = event.target.value;
        setEmail(emailValue);
        if (emailValue.length > 0) {
            setValidEmail(true);
        }
    }
    const passwordChange = (event) => {
        const pwd = event.target.value;
        setPassword(pwd);
        if (pwd.length > 6) {
            setValidPassword(true);
        }
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (validateForm()) {
            setIsLoginError(false);
            login(email, password)
                .then(() => {
                    navigate('/dashboard')//musi zgadzac sie z tym co jest w config na index.js
                })
                .catch(error => {
                    //obsluga bledu jesli uzytkownik jest niepoprawny
                    console.log('message: ', error.message);
                    console.log('code: ', error.code);
                    if (error.code.includes('not-found') || error.code.includes('Error')) {
                        setIsLoginError(true);
                    }


                })

        }

    }
    const validateForm = () => {
        let isValid = false;

        if (email.length < 1) {
            setValidEmail(false);
        }
        if (password.length < 3) {
            setValidPassword(false);
        }
        if (email.length > 0 && password.length > 3) {
            isValid = true;
            setValidEmail(true);
            setValidPassword(true);
            setEmail('');
            setPassword('');
        }
        return isValid;
    }

    return (
        <Main>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <InputField
                        type="text"
                        value={email}
                        onChange={emailChange}
                    />
                    {/* <input type="text" value={email} onChange={emailChange} /> */}
                    <span className={styles.loginError}>{!validEmail ? "Email can not be empty" : null}</span>
                    {/* {!validEmail?<p>Pole email nie moze byc puste</p>:null} */}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <InputField
                        type="password"
                        value={password}
                        onChange={passwordChange}
                    />
                    {/* <input type="password" value={password} onChange={passwordChange} /> */}
                    <span className={styles.loginError}>{!validPassword ? "Pwd needs to have at least 5 chars" : null}</span>
                </div>
                <div>
                    {/* {isLoginError ? <p>Niepoprawny login lub haslo</p> : null} */}
                    {isLoginError && <p>Niepoprawny login lub haslo</p>}
                    <Button
                        type="submit"
                        text="Login"
                    />

                    {/* <button type="submit">Login</button> */}
                </div>
            </form>
        </Main>
    )
}

export default Login