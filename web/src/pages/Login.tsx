import { useState, type ChangeEvent } from "react";
import { Link } from 'react-router-dom'

function Login () {

    const [username, setUsername] = useState("")
    const handleUsernameChange = (event:ChangeEvent<HTMLInputElement>) : void => {
        setUsername(event.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>) : void => {
        setPassword(event.target.value)
    }

    const sendCreds = (): void=> {
        const LoginRequestObject: string = JSON.stringify({ username, password });
        console.log(`Creds Passed! First Name = ${LoginRequestObject}`);
    }

    return (
        <>
            <input
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {handleUsernameChange}
            />

            <input
                type = "text"
                placeholder = "Password"
                value = {password}
                onChange = {handlePasswordChange}
            />
            
            <button id = "submitCreds" onClick={sendCreds}>Submit</button>

            <Link to="/Register">Create Account</Link>
        </>

    )

}

export default Login