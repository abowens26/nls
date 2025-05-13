
import Header from "../Components/Header"
import "./GImodcontent.css"
import { NavLink } from "react-router-dom"
import Footer from "../Components/Footer"
function SSModContent () {

    //Front-end code for the social skills module content. This will show the presentation for the users
    return (
        <div>
            < Header />
            <NavLink exact to="/SSMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
            <div class="content-title">
                 <h1>Social Skills Presentation</h1>
            </div>
            <div class="content-p">
                <p>Please wait for the presentation to load, then review the slides at your own pace.</p>
            </div>
            <div class="nextbtncontainer">
                 <NavLink exact to="/Test"> <button class="back-dashboard back nextpage">Navigate to Quiz </button></NavLink>
            </div>
             
        <div class="ppt-container">
        <iframe 
        id="ppt"
        src="https://1drv.ms/p/c/b9f038b663af0215/IQTnT6op1kqWTI-G83PMdWDFAYQ33Bamtmc37E9oB6XY0VE?wdAr=1.7777777777777777" 
        class="ppt-gi"
        width="800px" 
        height="450px" 
        frameborder="10">This is an embedded 
        </iframe>
         </div>

         <Footer />
        </div>
    )
}



export default SSModContent