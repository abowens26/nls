import Header from "../Components/Header"
import './GImod.css'
import { NavLink } from "react-router-dom"


function GiMod() {
    return (
        <div>
        <Header />
        <div className="mod">
            <div className="left-side">
                <div className="background"></div>
            </div>
            <div className="right-side">
                <h1 className="module-title">G.R.O.U.P Introduction</h1>
                <NavLink className="mod-options" exact to="/GImodintro">Introduction</NavLink> 
                <NavLink  className="mod-options" exact to="/GIModContent">Module Content</NavLink>
                <NavLink  className="mod-options" exact to="/GITest">Quiz</NavLink>
                <NavLink  className="mod-options" exact to="/Dashboard">Back to Dashboard</NavLink>
            </div>
        </div>
    </div>   
)
}


export default GiMod
