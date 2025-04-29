import React, {useEffect, useState} from "react";
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Landing.css"




function Landing() {
  
      

    

    

    return (



        <div class="homebody">
        
        <NavLink className="nav landing" exact to="/Login">Login</NavLink> 
        <NavLink  className="nav landing" exact to="/SignUp">Create an Account</NavLink>
        </div>
    )
}


export default Landing