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

        <input
        type= "text"
        value={name}
        onChange={handleInsertName}
        placeholder="Full Name"
        pattern="^[A-Z a-z]{3,16}$"
        required/>

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

        <input
        type= "password"
        value={confirm}
        onChange={handleInsertConfirm}
        placeholder="Confirm Password"
        pattern={password}
        required/>


    <button type='submit'>
        Sign up
    </button>

    </div>
</form>
)
}