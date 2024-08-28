import { useState } from "react"

export default function Signin () {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {e.preventDefault();}

    function handleInsertEmail (e) {setEmail(e.target.value)}
    function handleInsertPassword (e) {setPassword(e.target.value)}

    return (
        <div className="signin-container">
        <form className="signin-form" onSubmit={handleSubmit}> 
         
            <h2> Sign in </h2>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                type= "email"
                value={email}
                onChange={handleInsertEmail}
                placeholder="Email"
                required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                type= "password"
                value={password}
                onChange={handleInsertPassword}
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
                required/> 
            </div>

            <button 
                className="signin-button"
                type='submit'
            >
                        Sign in
            </button>
             
        </form>
        </div>
                )
}