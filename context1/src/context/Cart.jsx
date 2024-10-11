import { createContext, useState } from "react";

export const cartcontext = createContext()

export const Cartprovider = (props) =>{
const [item,setitem] = useState([])

     return (
     <cartcontext.Provider value={{item,setitem}} >
        {props.children}
     </cartcontext.Provider>
     )
}