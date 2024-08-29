import UserContext from "./usercontext";
import React from "react";

const UserContextprovider = ({ children }) => {

    const [user, setuser] = React.useState(null)
    return (
        <UserContext.Provider value={{user,setuser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UserContextprovider;



