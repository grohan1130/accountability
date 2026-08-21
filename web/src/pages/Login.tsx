import { useState, type ChangeEvent } from "react";

function Login () {

    const [username, setUsername] = useState("")

    const handleUsernameChange = (event:ChangeEvent<HTMLInputElement>) : void => {
        setUsername(event.target.value)
    }

    return (
        <>
            <input
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {handleUsernameChange}

            
            />
        </>

    )

}