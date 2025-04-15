import React, {useState} from "react";
import "./Login.css"
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";



 function PasswordRecovery() {
    const [new_password, setNewPassword] = useState('')

    const[recoverStatus, setRecoverStatus] = useState('');
    const navigate = useNavigate();
    


    

    const resetPassword = async() => {

        const { data, error } = await supabase.auth.updateUser({
            password: new_password
          })
     

          if (error) { 
            setRecoverStatus("Could not reset password")
            console.log(error.message)
            return;
          }

          if (data) {
            setRecoverStatus("Password successfully reset!")
            navigate("/Login")
          }
    }




    return (



        <div class="homebody">
        
            <div class="login-container">
                <h2 class="login-title">Recover Account</h2>
                <p>{recoverStatus}</p>
                <label for="password">New Password</label>
                <input type="password" value={new_password} class="login-field" placeholder="New Password" onChange={(e) => {
                    setNewPassword(e.target.value);
                }} required></input>
                <button type="submit" class="submit-btn" onClick={resetPassword}>Submit</button>
                <p class="signup">Don't have an account? <a href="/Signup">Sign Up</a></p>
                <p class="signup">Already have an account? <a href="/">Login</a></p>
            </div>

        
         












        </div>
    )
}


export default PasswordRecovery