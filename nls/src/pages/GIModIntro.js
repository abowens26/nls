import Header from "../Components/Header";
import "./GIModIntro.css"
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
function GIModIntro() {

    //Front-end code for the G.R.O.U.P Module Introduction
    return (
        <div>
            <Header />
            <NavLink exact to="/GIMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
            <div class="content-cont">

            </div>
            <div class="content">
                <h1>Group Expectations and Guidelines</h1>
            </div>

            <div class="content">
                <h2>Confidentiality</h2>
            </div>

            <div class="paragraph">
                <p>What's shared in group stays in group. We maintain strict privacy to create a space where everyone feels safe to express themselves.</p>
            </div>


            <div class="content">
                <h2>Mutual Respect</h2>

            </div>
            <div class="paragraph">
                <p>We value every voice and perspective. Listening without judgment and offering constructive feedback creates our supportive community.</p>
            </div>


            <div class="content">
                <h2>Consistent Participation</h2>

            </div>
            <div class="paragraph">
                <p>Regular attendance and active engagement maximize benefits. We ask for commitment to the full program for the best results.</p>
            </div>

            <div class="content">
                <h2>Open Communication</h2>

            </div>

            <div class="paragraph">
                <p>Share challenges and celebrate progress. Your honest participation enriches the experience for everyone in the group.</p>
            </div>



            <div class="content">
                <h1>Module Objectives Overview</h1>
            </div>

            <div class="content">
                <h2>Self-Awareness</h2>
            </div>

            <div class="paragraph">
                <p>Recognize emotions and thoughts</p>
            </div>


            <div class="content">
                <h2>Emotional Regulation</h2>

            </div>
            <div class="paragraph">
                <p>Manage feelings appropriately</p>
            </div>


            <div class="content">
                <h2>Communication Skills</h2>

            </div>
            <div class="paragraph">
                <p>Express needs and listen effectively</p>
            </div>

            <div class="content">
                <h2>Healthy Relationships</h2>

            </div>

            <div class="paragraph">
                <p>Build positive connections with others</p>
            </div>



    < Footer />

        </div>
    )
}


export default GIModIntro