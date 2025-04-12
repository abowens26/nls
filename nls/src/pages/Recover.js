import React, {useState} from "react";
import "./Login.css"
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";



 function Recover() {
    const [email, setEmail] = useState('')
    const [new_password, setNewPassword] = useState('')

    const[recoverStatus, setRecoverStatus] = useState('');
    const navigate = useNavigate();
    


    

    const resetPassword = async() => {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "/Recover",
          });

          if (error) {
            setRecoverStatus("Email does not exist")
            console.log(error.message)
            return;
          }

          if (data) {
            setRecoverStatus("Reovery message has been sent to your email!")
          }
    }




    return (



        <div class="homebody">
        
            <div class="login-container">
                <h2 class="login-title">Recover Account</h2>
                <p>{recoverStatus}</p>
                <label for="email">Email</label>
                <input type="email" value={email} class="login-field" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value);
                }} required></input>
                <button type="submit" class="submit-btn" onClick={resetPassword}>Send Email</button>
                <p class="signup">Don't have an account? <a href="/Signup">Sign Up</a></p>
                <p class="signup">Already have an account? <a href="/">Login</a></p>
            </div>

        
         












        </div>
    )
}


export default Recover