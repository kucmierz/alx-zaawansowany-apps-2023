import { useEffect, useState } from "react";

const WelcomeBox = (props) => {
    const [hidden, setIsHidden] = useState(false);
    // props jest to pojemnik (obiekt), ktory trzyma wszystkie dane, ktore do niego przychodza z komponentu nadrzednego
    console.log(props);
    useEffect(() => {
        setTimeout(() => {
            setIsHidden(true);
        }, props.duration * 1000)
    }, [])

    if (!props.name) return null //gdy nie ma parametru, to nie wyswietlaj niczego

    if (hidden) return null
    return (
        <h1>Welcome to {props.name}</h1>
    )
}
export default WelcomeBox;