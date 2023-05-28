const WelcomeBoxWithChildren = (props) => {
    // jesli przekazujemy tresc pomiedzy otwarciem i zamknieciem znacznika komponentu, to mamy do niej dostep za pomoca props.children
    console.log(props.children);
    // specjalny znacznik, tzw. React Fragment, ktory powoduje, iz mozemy zaladowac jakas tresc bez znacznika (pusty znacznik <> i </>)
    return (
        // <div>
        //     {props.children}
        // </div>
        <>
            {props.children}
        </>
    )
}
export default WelcomeBoxWithChildren;