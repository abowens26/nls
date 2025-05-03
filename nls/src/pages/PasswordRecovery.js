import React, {useState} from "react";
import "./Login.css"
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";



 function PasswordRecovery() {
    const [new_password, setNewPassword] = useState('')
    const [confirm_password, setConfirmPassowrd] = useState('')

    const[recoverStatus, setRecoverStatus] = useState('');
    const navigate = useNavigate();
    


    
    //Reset password functionality
    const resetPassword = async() => {
        //Update user password
        const { data, error } = await supabase.auth.updateUser({
            password: new_password
          })
     

          if (error) { 
            setRecoverStatus("Please make sure both passwords are the same.")
            console.log(error.message)
            return;
          }
          //If new password equals the confirmed passowrd, reset user password 
          if (data && new_password === confirm_password) {
            setRecoverStatus("Password successfully reset!")
            navigate("/")
          }
    }



//Front-end code for account recovery
    return (



        <div class="homebody">
        
            <div class="login-container">
                <h2 class="login-title">Recover Account</h2>
                <p>{recoverStatus}</p>
                <label for="password">New Password</label>
                <input type="password" value={new_password} class="login-field" placeholder="New Password" onChange={(e) => {
                    setNewPassword(e.target.value);
                }} required></input>
                 <label for="password"> Confirm New Password</label>
                <input type="password" value={confirm_password} class="login-field" placeholder="Confirm Password" onChange={(e) => {
                    setConfirmPassowrd(e.target.value);
                }} required></input>
                <button type="submit" class="submit-btn" onClick={resetPassword}>Submit</button>
                <p class="signup">Don't have an account? <a href="/Signup">Sign Up</a></p>
                <p class="signup">Already have an account? <a href="/">Login</a></p>
            </div>

        
         












        </div>
    )
}


export default PasswordRecovery