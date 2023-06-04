import Header from "../../sections/Header/Header";
import { getUser } from "../../../services/firebase";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../../../contexts/global";

const Main = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    // const user = getUser();
    useEffect(() => {
        getUser(handleUserChange)
    })
    // const state = useContext(GlobalContext);
    // console.log(state.user);

    const handleUserChange = (user) => {
        // console.log(user);
        // console.log(location);
        if (user) {
            if (location.pathname === '/' || location.pathname === '/register') {
                navigate('/dashboard');
            }
        } else {
            // ten if jest dlatego, iz chcemy przekierowania na strone logowania, tylko i wylacznie wowczas, kiedy uzytkownik jest na stronie dashboard
            // bez tego if-a, przekierowanie nastapiloby takze kiedy uzytkownik bylby juz na stronie logowania
            if (location.pathname === '/dashboard') {
                navigate('/');
            }

        }
    }
    // useEffect(() => {
    //     if (user?.uid) return;

    //     console.log(user);
    //     //user?.uid ? gdy zmienna jest null, wtedy nie mozna zrobic "kropka" cos tam
    //     // ? jest zabezpieczeniem
    // }, [user?.uid]);

    return (
        <div>
            <Header />

            {props.children}
            <footer>
                Hello from footer
            </footer>
        </div>
    );
}

export default Main