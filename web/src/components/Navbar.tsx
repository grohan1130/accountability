import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div style = {{ border: '2px solid red'}}>
            <p>The Navbar Goes Here</p>
            <Link to="/Register">Create an Account</Link> <br/>
            <Link to="/Login">Log In</Link>
        </div>
    )

}

export default Navbar