import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom';
import {auth} from '../FirebaseConfig'
import { signInWithPopup } from "firebase/auth";

export default function Signin () {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await fetch('http://localhost:8000/signin', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: email,
                password: password,
              }),
              mode: 'cors', // Enable CORS
            });
        
            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.detail || 'Failed to sign in');
            }
        
            const data = await response.json();
            alert(`Sign in successful! Welcome ${data.name}`);
            navigate('/');
          } catch (error) {
            alert(error.message);
          } finally {
            setLoading(false);
          }
        };

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
                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8}$"
                required/> 
            </div>

            <button 
                className="signin-button"
                type='submit'
            >
                        {loading ? "Signing In..." : "Sign in"}
            </button>
             
        </form>
        </div>
                )
}