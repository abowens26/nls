import Header from "../Components/Header"
import './Welcome.css'
import Nav from "../Components/Nav"
import { NavLink } from "react-router-dom"
import Footer from "../Components/Footer"

//Front-end code for the welcome page of the application
function Welcome() {
    return (
        <div>
        <Header />
        <Nav />
        <div className="mod">
            <div className="left-side">
                <div className="background-welcome"></div>
            </div>
            <div className="right-side">
                <h1 class="welcome-title">Welcome to the NLS App!</h1>
                <h1 className="module-title">Building Stronger Minds Together</h1>
                <p class="blurb">Welcome to our comprehensive psychological services program, where evidence-based group therapy helps youth, teens, 
                     and adults develop essential life skills. Our trained clinical
                     staff creates a supportive environment that fosters personal
                      growth and lasting positive change. Through our innovative 
                      NLS App, we use real-time data to monitor progress and personalize care, 
                      helping individuals improve their mental health more effectively. 
                      The NLS App is designed to empower clients by tracking their goals, 
                      providing insights, and enhancing communication with their therapy team,
                       ensuring that every step of the journey is informed, targeted, and impactful.</p>

                       <NavLink  className="mod-options" exact to="/Dashboard">Modules</NavLink>
            </div>
        </div>

        < Footer />
    </div>   
)
}


export default Welcome
