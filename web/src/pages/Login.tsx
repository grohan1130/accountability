import { useState } from "react";

function Login () {

    const [username, setUsername] = useState("")

    return (
        <>
            <input
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {setUsername}

            
            />
        </>

    )

}