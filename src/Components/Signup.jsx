import { useState } from "react"
import { Link } from 'react-router-dom';

export default function Signup () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = (e) => {e.preventDefault();}

    function handleInsertName(e) {setName(e.target.value)}
    function handleInsertEmail (e) {setEmail(e.target.value)}
    function handleInsertPassword (e) {setPassword(e.target.value)}
    function handleInsertConfirm (e) {setConfirm(e.target.value)}

return (
<div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}> 
            {/* <h1> Welcome to MKGL </h1> */}
            <h2> Sign Up </h2>
                <div className="input-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                    id="name"
                    type= "text"
                    value={name}
                    onChange={handleInsertName}
                    placeholder="Full Name"
                    pattern="^[A-Z a-z]{3,16}$"
                    required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input
                    id="email"
                    type= "email"
                    value={email}
                    onChange={handleInsertEmail}
                    placeholder="Email"
                    required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input
                    id="password"
                    type= "password"
                    value={password}
                    onChange={handleInsertPassword}
                    placeholder="Password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
                    required/>
                </div>
                <div className="input-group">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                    id="password"
                    type= "password"
                    value={confirm}
                    onChange={handleInsertConfirm}
                    placeholder="Confirm Password"
                    pattern={password}
                    required/>
                </div>

            <button className="signup-button" type='submit'>
                Sign up
            </button>
            <p> Already have an account? 
                <Link to="/signin" className="signin-link">
                    Sign in
                </Link> 
            </p>
    </form>
</div>
)
}