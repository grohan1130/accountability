import { useState, type ChangeEvent } from "react";

function Register() {

    const [username, setUsername] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value)
    }

    const sendCreds = (): void => {
        console.log(`Creds Passed! Username = ${username} Password = ${password}`);
    };

    return (
        <>
            <h1>Create Account</h1>

            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange = {handleUsernameChange}
            />

            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange = {handlePasswordChange}
            />
            <button id = "submitCreds" onClick={sendCreds}>Submit</button>
        </>
    )
}

export default Register