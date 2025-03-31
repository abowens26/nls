import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Resources.css"


function Resources () {
    /*Page for links to outside resources for users  */
    return (
        <div>
             <Header />
             <Nav />

             <div class="resource-container">
            <section  class="resource-section">

                <img class= "social" src="https://static.wixstatic.com/media/11062b_777aa7089c8d4165b66a5633e6cf34f9~mv2.jpg/v1/fill/w_945,h_1152,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_777aa7089c8d4165b66a5633e6cf34f9~mv2.jpg"></img>
                <p></p>
                <h3 class="res ghc"><a class="additional-resources" href="https://med.stanford.edu/fastlab/research/imapp/msrs/_jcr_content/main/accordion/accordion_content3/download_256324296/file.res/PHQ9%20id%20date%2008.03.pdf">GHC Paitent Health Questionnaire</a></h3>
                
                <a class="test-link" href="/Test"> </a> 
                 
              
        
                
            </section>



    

            <section class="section-2">
                <img class="social" src="https://th.bing.com/th/id/OIP.6SA_MBuRHKDZGRFz-2C-0QHaEH?w=333&h=185&c=7&r=0&o=5&pid=1.7"></img>
                <h3 class="res"><a class="additional-resources" href="https://thinkcbt.com/images/Downloads/Thought_Records/EXAMPLE-CBT-THOUGHT_RECORD-V-THINK-CBT-01072020.pdf">CBT Thought Record Sheet</a></h3>

            

            </section>


            
            </div>

             
        </div>
       
    )

}

export default Resources