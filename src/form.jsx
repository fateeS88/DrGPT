import { useState } from "react"

export default function Signup () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState (null)

    

    const handleSubmit = (e) => {e.preventDefault();}

    function handleInsertName(e) {setName(e.target.value)}
    function handleInsertEmail (e) {setEmail(e.target.value)}
    function handleInsertPassword (e) {setPassword(e.target.value)}

return (
<form onSubmit={handleSubmit}> 
    <div>
    <h1> Welcome to MKGL </h1>
    <h2> create an account </h2>
    <label>
        Name:
        <input
        type= "text"
        value={name}
        onChange={handleInsertName}
        placeholder="type your name..."
        pattern="^[A-Z a-z]{3,16}$"
        required/>
    </label>

    <label>
        Email:
        <input
        type= "email"
        value={email}
        onChange={handleInsertEmail}
        placeholder="type your email..."/>
    </label>

    <label>
        Password:
        <input
        type= "password"
        value={password}
        onChange={handleInsertPassword}
        placeholder="type your password..."/>
    </label>

    <button type='submit'>
        submit
    </button>

    </div>
</form>
)
}