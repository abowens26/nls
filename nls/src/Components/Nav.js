import React from "react";
import "./Nav.css"
import { NavLink } from "react-router-dom";


function Nav(){

    


    return (
        <div>
            <nav>
                <a class="nav"><NavLink  exact to="/Dashboard">Home</NavLink> </a>
                <a class="nav"><NavLink  exact to="/Resources">Additional Resources</NavLink></a>
                <a class="nav"><NavLink  exact to="/Stressed">Feeling Stressed?</NavLink></a>

            </nav>
        </div>
    )
}

export default Nav;