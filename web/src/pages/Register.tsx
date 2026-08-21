import { useState, type ChangeEvent } from "react";

function Register () {


    const [firstName, setFirstName] = useState("")
    const handleFirstNameChange = (event:ChangeEvent<HTMLInputElement>) : void => {
        setFirstName(event.target.value)
    }

    const [lastName, setLastName] = useState("")
    const handleLastNameChange = (event:ChangeEvent<HTMLInputElement>) : void => {
        setLastName(event.target.value)
    }


    const [username, setUsername] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setUsername(event.target.value)
    }


    const [password, setPassword] = useState("")
    const handlePasswordChange = (event:ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value)
    }


    const newUserObject: string = JSON.stringify({ firstName, lastName, username, password });


    const sendCreds = (): void => {
        console.log(`Creds Passed! First Name = ${newUserObject}`);
    };


    return (
        <>
            <h1>Create Account</h1>

            <input
                type = "text"
                placeholder="First Name"
                value = {firstName}
                onChange={handleFirstNameChange}
            />

            <input
                type = "text"
                placeholder="Last Name"
                value = {lastName}
                onChange = {handleLastNameChange}
            />

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