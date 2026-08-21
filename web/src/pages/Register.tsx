function Register() {

    const sendCreds = (): void => {
        console.log('Creds Passed!');
    };

    return (
        <>
            <h1>Create Account</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button id = "submitCreds" onClick={sendCreds}>Submit</button>
        </>
    )
}

export default Register