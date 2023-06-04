import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useEffect, useState } from "react";
import { logout } from "../../../services/firebase"
import { getUser } from "../../../services/firebase";

// aby skorzystac z context:
import { useContext } from "react"
import { GlobalContext } from "../../../contexts/global"

const Header = props => {
    const state = useContext(GlobalContext);
    const [isUser, setIsUser] = useState(false);

    // console.log(state);//odczyt zmiennej z contextu
    // console.log(state.user);//odczyt zmiennej z contextu
    useEffect(() => {
        getUser(showMenuComponents)
    })
    const showMenuComponents = (user) => {
        // setIsUser(false);
        if (user) {
            console.log('user:', user);
            setIsUser(true);
        }
        // console.log('state: ', state);
        // console.log('and user: ', user);
    }

    return (
        <header className={styles.header}>
            Messages App{showMenuComponents()}
            <nav>
                <ul>
                    {!isUser ?
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        : null}
                    {!isUser ?
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        : null}
                    {isUser ?
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        : null}
                    {isUser ?
                        <li onClick={() => logout()}>
                            <Link to="/">Logout</Link>
                        </li>
                        : null}
                </ul>
            </nav>
        </header>
    )
}
export default Header