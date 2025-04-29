import Header from "../Components/Header";
import "./GIModIntro.css"
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
function SSModIntro() {
    return (
        <div>
            <Header />
            <NavLink exact to="/SSMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
            <div class="content-cont">

            </div>
            <div class="content">
                <h1>Social Skills Module Introduction</h1>
            </div>

            <div class="content">
                <h2>What Are Social Skills?</h2>
            </div>

            <div class="paragraph">
                <p>Social competence encompasses the verbal and non-verbal behaviors that help us interact effectively with others. These learned abilities form the foundation for healthy relationships, academic success, and career advancement. Research consistently shows that strong social skills correlate with better outcomes across all areas of life, from school performance to mental health and career success.</p>
            </div>

        
            <div class="content">
                <h2>Proven Results</h2>

            </div>
            <div class="paragraph">
                <p>The 2018 CASEL study demonstrated that students who participated in social skills training showed an 11% improvement in academic performance compared to control groups.</p>
            </div>



            <div class="content">
                <h1>Social Skills Lesson Details</h1>
            </div>

            <div class="content">
                <h2>Active Listening</h2>
            </div>

            <div class="paragraph">
                <p>Learning to fully engage with speakers through eye contact, nodding, and reflective responses</p>
            </div>


            <div class="content">
                <h2>Conversation Skills</h2>

            </div>
            <div class="paragraph">
                <p>Practicing turn-taking, asking questions, and maintaining appropriate topics</p>
            </div>


            <div class="content">
                <h2>Group Cooperation</h2>

            </div>
            <div class="paragraph">
                <p>Working effectively with others toward shared goals</p>
            </div>

            <div class="content">
                <h2>Empathy Building</h2>

            </div>

            <div class="paragraph">
                <p>Developing the ability to understand and share the feelings of others</p>
            </div>




        < Footer />
        </div>
    )
}


export default SSModIntro