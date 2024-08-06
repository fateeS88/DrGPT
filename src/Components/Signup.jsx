import { useState } from "react"

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
        placeholder="type your email..."
        required/>
    </label>

    <label>
        Password:
        <input
        type= "password"
        value={password}
        onChange={handleInsertPassword}
        placeholder="type your password..."
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
        required/>
    </label>

    <label>
        Confirm password:
        <input
        type= "password"
        value={confirm}
        onChange={handleInsertConfirm}
        placeholder="confirm your password..."
        pattern={password}
        required/>
    </label>

    <button type='submit'>
        submit
    </button>

    </div>
</form>
)
}