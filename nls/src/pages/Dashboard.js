import React from "react"
import Header from "../Components/Header"
import "./Dashboard.css"
import Nav from "../Components/Nav"


function Dashboard() {
    return (
        <div class="body">
            <Header />
            <Nav />
            <div class="statement">
            <h2 class="learning-statement">Today we are learning...</h2>
            <div class="test-container">
            <section>
                <img class= "social" src="https://static.wixstatic.com/media/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg/v1/fill/w_489,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_f8640eae82fa4b82931eb2cc3b8b709b~mv2.jpg"></img>
                <h3>Social Skills Test</h3>
                <span class="bottom-corner">
                <a class="test-link" href="/Test">Take test to complete! <i class="arrow"></i></a>
                </span>
                
            </section>
            </div>
            </div>
           


            
        </div>


    )
}

export default Dashboard