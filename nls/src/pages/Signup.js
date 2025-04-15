import React, { useEffect, useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import supabase from "../helper/supabaseClient";


function SignUp() {
    const [emailSignup, setEmailSignup] = useState('')
    const [passwordSignup, setPasswordSignup] = useState('');
    const [message, setMessage] = useState("");
    const navigate = useNavigate();



    useEffect(() => {
    
            let btn = document.getElementById("create");
            const listener = (event) => {
                if(event.code === 'Enter' || event.code === 'NumpadEnter') {
                    event.preventDefault();
                    btn.click()
                    
                }
                
            };
    
            document.addEventListener("keydown", listener);
            return () => {
                document.removeEventListener("keydown", listener);
            };
        }, []);

     /*Code from: https://www.youtube.com/watch?v=Q7-DI39epR8&t=2s */
     /*Source: https://github.com/arpanneupane19/react-supabase-auth */
     /*Enables user creating an account*/
    const handleSubmit = async(event) => {
        event.preventDefault();
        setMessage("")
        
        const {data, error} = await supabase.auth.signUp({
            email: emailSignup,
            password: passwordSignup,
        });

        if (error) {
            setMessage(error.message);
            return;
        }
        if(data) {
            setMessage("User account created")
            navigate("/")
            setEmailSignup("")
            setPasswordSignup("")
        }
    }


   

    return (



        <div class="homebody">
        
            <div class="login-container">
          
                <h2 class="login-title">Sign Up</h2>      
                <span class="signup-message">{message}</span>
                <label for="email">Email</label>
                <input type="email" class="login-field" placeholder="Email" value={emailSignup}  onChange={(e) => {
                    setEmailSignup(e.target.value);
                }} required></input>
                <label for="passowrd">Password</label> 
                <input type="password" class="login-field" placeholder="Password" value={passwordSignup} onChange={(e) => {
                    setPasswordSignup(e.target.value);
                }} required></input>
                <button id="create" type="submit" class="submit-btn" onClick={handleSubmit}>Create an Account</button>
                <p class="signup">Already have an account? <a href="/">Login</a></p>
            </div>

        
         












        </div>
    )
}


export default SignUp