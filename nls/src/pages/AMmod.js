import Header from "../Components/Header"
import './AMmod.css'
import { NavLink } from "react-router-dom"


function AmMod() {
    return (
        <div>
        <Header />
        <div className="mod">
            <div className="left-side">
                <div className="background-am"></div>
            </div>
            <div className="right-side">
                <h1 className="module-title">Anger Management</h1>
                <NavLink className="mod-options" exact to="">Introduction</NavLink> 
                <NavLink  className="mod-options" exact to="/AMModContent">Module Content</NavLink>
                <NavLink  className="mod-options" exact to="/AmTest">Quiz</NavLink>
                <NavLink  className="mod-options" exact to="/Dashboard">Back to Dashboard</NavLink>
            </div>
        </div>
    </div>   
)
}


export default AmMod
