import React, {useState} from "react";
import "./Login.css"
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";





function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const[loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();
    


    
     /*Code from: https://www.youtube.com/watch?v=Q7-DI39epR8&t=2s */
     /*Source: https://github.com/arpanneupane19/react-supabase-auth */
     //Allows user to sign in
    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoginStatus("")
        
        const {data, error} = await supabase.auth.signInWithPassword({

            email: email,
            password: password,
        });

        if (error) {
            setLoginStatus(error.message);
            return;
        }
        if(data) {
            setLoginStatus("Welcome!")
            navigate("/Dashboard")
            return null;
        }
    }





    return (



        <div class="homebody">
        
            <div class="login-container">
                <h2 class="login-title">Login</h2>
                <p>{loginStatus}</p>
                <label for="email">Email</label>
                <input type="email" value={email} class="login-field" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }} required></input>
                <label for="passowrd">Password</label> 
                <input type="password" value={password} class="login-field" placeholder="Password" onChange={(e) => {
                    setPassword(e.target.value);
                }} required></input>
                <button type="submit" class="submit-btn"  onClick={handleSubmit}>Login</button>
                <p class="signup">Don't have an account? <a href="/Signup">Sign Up</a></p>
            </div>

        
         












        </div>
    )
}


export default Login