
import Header from "../Components/Header"
import "./GImodcontent.css"
import { NavLink } from "react-router-dom"
import Footer from "../Components/Footer"
function AMModContent () {
    return (
        <div>
            < Header />
            <NavLink exact to="/AmMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
            <div class="content-title">
                 <h1>Anger Management Video</h1>
            </div>
            <div class="content-p">
                <p>Please wait for the video to fully load before viewing it at your own pace.</p>
            </div>
             
        <div class="ppt-container">
        <iframe 
        id="ppt"
        src="https://www.youtube.com/embed/AQIQCOY_Im0" 
        class="ppt-gi"
        width="800px" 
        height="450px" 
        frameborder="10">This is an embedded 
        </iframe>
         </div>

         < Footer />
        </div>
    )
}



export default AMModContent