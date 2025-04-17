import React from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";


function Nav(){

    


    return (
        <div class="nav-body">
            <nav>
                <NavLink className="nav" exact to="/Dashboard">Home</NavLink> 
                <NavLink  className="nav" exact to="/Resources">Additional Resources</NavLink>
                <NavLink  className="nav" exact to="/Stressed">Feeling Stressed?</NavLink>

            </nav>
        </div>
    )
}

export default Nav;