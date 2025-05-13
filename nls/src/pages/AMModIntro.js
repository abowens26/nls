import Header from "../Components/Header";
import "./GIModIntro.css"
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
function AMModIntro() {
    //Code for the Anger Management Module Video this is just information of what the module has to offer.
    return (
        <div>
            <Header />
            <NavLink exact to="/AmMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
            <div class="content-cont">

            </div>
            <div class="content">
                <h1>Anger Management Module Introduction</h1>
            </div>

            <div class="content">
                <h2>Understanding Anger</h2>
            </div>

            <div class="paragraph">
                <p>Anger is a normal, healthy emotion when expressed appropriately. Our goal is not to eliminate anger but to manage it effectively.</p>
            </div>

        
            <div class="content">
                <h2>Prevalence</h2>

            </div>
            <div class="paragraph">
                <p>CDC data (2022) shows anger issues affect approximately 7% of youth, impacting school performance, relationships, and mental health.</p>
            </div>

            <div class="content">
                <h2>Program Goals</h2>
            </div>

            <div class="paragraph">
                <p>Reduce frequency and intensity of anger outbursts, develop healthy expression, and build alternative response strategies.</p>
            </div>

        
            <div class="content">
                <h2>Success Metrics</h2>

            </div>
            <div class="paragraph">
                <p>Participants typically report improved relationships, better school/work performance, and enhanced emotional well-being.</p>
            </div>




            <div class="content">
                <h1>Anger Management Lesson Details</h1>
            </div>

            <div class="content">
                <h2>Identifying Triggers</h2>
            </div>

            <div class="paragraph">
                <p>Learn to recognize personal anger triggers through self-reflection exercises and group discussions. Participants maintain anger logs to identify patterns in their emotional responses.</p>
            </div>


            <div class="content">
                <h2>Developing Techniques</h2>

            </div>
            <div class="paragraph">
                <p>Master practical strategies including deep breathing, cognitive reframing, and appropriate time-outs. These evidence-based approaches help interrupt the anger cycle before escalation.</p>
            </div>


            <div class="content">
                <h2>Practicing New Responses</h2>

            </div>
            <div class="paragraph">
                <p>Apply techniques through role-playing challenging scenarios in a supportive environment. Group members share successful coping experiences and provide mutual support.</p>
            </div>

            <div class="nextbtncontainer">
                 <NavLink exact to="/AMModContent"> <button class="back-dashboard back nextpage">Navigate to Module Content </button></NavLink>
            </div>



        < Footer />
        </div>
    )
}


export default AMModIntro