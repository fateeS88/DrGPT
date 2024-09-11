import { useState } from "react"
import { Link } from 'react-router-dom';
import {auth} from '../FirebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [confirm, setConfirm] = useState("")
    const [loading, setLoading] = useState(false)

    const sendToBackend = async (email, password, name) => {
        try {
            const response = await fetch("http://localhost:8000/signup", {
               method: "POST", 
               headers: {
                "Content-Type": "application/json"
               },
               body: JSON.stringify({
                email: email,
                password: password,
                name: name,
            }),
                mode: "cors",
            })
            if (!response.ok){
                const errorData = await response.json();
                throw new Error(errorData.detail || "failed to signup")
            }
            const data = await response.json()
            alert("signup successful. backend data stored")
        } catch(error) {
            console.error("error signing up with backend", error)
            alert(error.message)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password, name)
            await sendToBackend(email, password, name)
        } finally {
            setLoading(false)
        }
    }

    function handleInsertName(e) {setName(e.target.value)}
    function handleInsertEmail (e) {setEmail(e.target.value)}
    function handleInsertPassword (e) {setPassword(e.target.value)}
    // function handleInsertConfirm (e) {setConfirm(e.target.value)}

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
                    // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
                    required/>
                </div>
                {/* <div className="input-group">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input
                    id="password"
                    type= "password"
                    value={confirm}
                    onChange={handleInsertConfirm}
                    placeholder="Confirm Password"
                    pattern={password}
                    required/>
                </div> */}

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