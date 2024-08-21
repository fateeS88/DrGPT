import { useState } from "react"

export default function Signin () {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {e.preventDefault();}

    function handleInsertEmail (e) {setEmail(e.target.value)}
    function handleInsertPassword (e) {setPassword(e.target.value)}

    return (
        <form onSubmit={handleSubmit}> 
            <div>
        
            <h2> Sign in </h2>
                <input
                type= "email"
                value={email}
                onChange={handleInsertEmail}
                placeholder="Email"
                required/>
        
                <input
                type= "password"
                value={password}
                onChange={handleInsertPassword}
                placeholder="Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
                required/> 
            <button type='submit'>
                    Sign in
            </button>
                </div> 
                </form>
                )
}