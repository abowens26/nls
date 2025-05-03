import React from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";


function Nav(){

    

    //Front-end code for website navigation bar
    return (
        <div class="nav-body">
            <nav>
                <NavLink className="nav" exact to="/Welcome">Home</NavLink> 
                <NavLink className="nav" exact to="/Dashboard">Modules</NavLink> 
                <NavLink  className="nav" exact to="/Resources">Additional Resources</NavLink>
                

            </nav>
        </div>
    )
}

export default Nav;