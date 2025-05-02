import React, {useEffect, useState} from "react";
import "./Login.css"
import supabase from "../helper/supabaseClient";




 function Recover() {
    const [email, setEmail] = useState('')


    const[recoverStatus, setRecoverStatus] = useState('');
   
useEffect(() => {

        let btn = document.getElementById("recover");
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

    

    const resetPassword = async() => {
        const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: "https://nls-topaz.vercel.app/PasswordRecovery",
          });

          if (error) {
            setRecoverStatus(error.message)
            console.log(error.message)
            return;
          }

          if (data) {
            setRecoverStatus("If the provided email exists, a message should be sent to your email to recover the account!")
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
                <button id="recover" type="submit" class="submit-btn" onClick={resetPassword}>Send Email</button>
                <p class="signup">Don't have an account? <a href="/Signup">Sign Up</a></p>
                <p class="signup">Already have an account? <a href="/Login">Login</a></p>
            </div>

        
         












        </div>
    )
}


export default Recover