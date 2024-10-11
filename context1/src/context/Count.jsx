import { createContext, useState } from "react";

export const count = createContext()

export const Countprovider = (props)=>{
const [county,setcounty] = useState(0)

    return(
        <count.Provider value={{county,setcounty}}>
           { props.children}
        </count.Provider>
    )
}