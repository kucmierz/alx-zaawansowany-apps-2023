import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()//tworzymy pusty kontener na dane

const GlobalProvider = (props) => {

// const [currentUser, setCurrentUser]=useState(null);

//     useEffect(() => {
//         getUser(handleUserChange)
//     },[])

//     const handleUserChange=(user)=>{

//     }


    return (
        <GlobalContext.Provider value="Hello from context">
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider