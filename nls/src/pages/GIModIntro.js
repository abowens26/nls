import Header from "../Components/Header";
import "./GIModIntro.css"
import { NavLink } from "react-router-dom";
function GIModIntro() {
    return (
        <div>
            <Header />
            <NavLink exact to="/GIMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
           <div class="content-cont">
            <div class="content">
                <h1>Group Expectations and Guidelines</h1>
            </div>

            <div class="content">
                <h2>Confidentiality</h2>
                <p>What's shared in group stays in group. We maintain strict privacy to create a space where everyone feels safe to express themselves.</p>
            </div>

            <div class="content">
                <h2>Mutual Respect</h2>
                <p>We value every voice and perspective. Listening without judgment and offering constructive feedback creates our supportive community.</p>
            </div>

            <div class="content">
                <h2>Consistent Participation</h2>
                <p>Regular attendance and active engagement maximize benefits. We ask for commitment to the full program for the best results.</p>
            </div>

            <div class="content">
                <h2>Open Communication</h2>
                <p>Share challenges and celebrate progress. Your honest participation enriches the experience for everyone in the group.</p>
            </div>
            </div> 



        </div>
    )
}


export default GIModIntro