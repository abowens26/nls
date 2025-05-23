import React, {useEffect, useState} from "react";
import './Header.css'
import { useNavigate } from "react-router-dom";
import supabase from "../helper/supabaseClient";


 function Header() {
    
    const [email, setEmail] = useState(null);

    //Fetch user from supabase to display on website header
    useEffect(() => {
        const fetchUser = async () => {
            const { data} = await supabase.auth.getUser();
            if (data?.user) {
                setEmail(data.user.email);
            }
        };
        fetchUser();
    }, []);

   function showLogout() {
      document.getElementById("logout").classList.toggle("show")
   }
   
    
    const navigate = useNavigate();
   

    
    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if(error) throw error;
        navigate("/")
        //clears localstorage when user signs out
        localStorage.clear();
       
    }

    
    
    return (
        <div class="header">
            <div class="title">
                <h2 class="psy-title">NLS Psychological Services</h2>
            </div>



        
            <div class="email-container">
              <a class="email" onClick={showLogout}>{email}</a>

            
            </div>
            <div class="logout-container">
                   <a class="logout" id="logout" onClick={signOut}>Logout</a>

            </div>
        
        </div>
    )
}


export default Header;