import Header from "../Components/Header"
import './SSmod.css'
import { NavLink } from "react-router-dom"


function SSmod() {
    return (
        <div>
        <Header />
        <div className="mod">
            <div className="left-side">
                <div className="background-ss"></div>
            </div>
            <div className="right-side">
                <h1 className="module-title">Social Skills</h1>
                <NavLink className="mod-options" exact to="">Introduction</NavLink> 
                <NavLink  className="mod-options" exact to="/SSModContent">Module Content</NavLink>
                <NavLink  className="mod-options" exact to="/Test">Quiz</NavLink>
                <NavLink  className="mod-options" exact to="/Dashboard">Back to Dashboard</NavLink>
            </div>
        </div>
    </div>   
)
}


export default SSmod
