import React, { use } from "react";
import './Header.css'
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    
    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if(error) throw error;
        navigate("/")
    }
    
    return (
        <div class="header">
            <div class="title">
                <h2>NLS Psychological Services</h2>
            </div>
        
            <div class="logout-container">
              <a class="logout" onClick={signOut}>Logout</a>
            </div>
         

        </div>
    )
}


export default Header;