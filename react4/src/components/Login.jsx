import React, { useState, useContext } from "react";
import UserContext from "../context/usercontext";


function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const { setuser } = useContext(UserContext)

    function handlesubmit(e) {
        e.preventDefault()

        setuser({ username, password })
    }
    return (

        <div>
            <h1>Login</h1>
            <input placeholder="username" value={username} onChange={(e) => setusername(e.target.value)} />
            <input placeholder="password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <button onClick={handlesubmit}>submit</button>
        </div>
    )
}

export default Login