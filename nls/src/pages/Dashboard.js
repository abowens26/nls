import React from "react"
import Header from "../Components/Header"
import "./Dashboard.css"
import Nav from "../Components/Nav"
import {Chart as ChartJS } from "chart.js/auto"
import {Bar, Doughnut, Line} from "react-chartjs-2"



function Dashboard() {
    const amRecentscore = sessionStorage.getItem('Amfinalscore')
    const recentScore = sessionStorage.getItem("finalScore")
    function ShowRecentScore() {
        document.getElementById("recent-score").classList.toggle("show");
    }

    function AmRecentScore() {
        document.getElementById("am-recent").classList.toggle("show");
    }

    
    return (
        
        <div class="body">
            <Header />
            <Nav />
            <div class="statement">
            <h2 class="learning-statement">Today we are learning...</h2>
            <div class="test-container">
            <section>
                <img class= "social" src="https://static.wixstatic.com/media/11062b_777aa7089c8d4165b66a5633e6cf34f9~mv2.jpg/v1/fill/w_945,h_1152,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_777aa7089c8d4165b66a5633e6cf34f9~mv2.jpg"></img>
                <p></p>
                <h3>Social Skills Test</h3>
                
                <a class="test-link" href="/Test">Take test! </a> 
                 
              
          
           <div class="score-container">
            <p class="show-recent" onClick={ShowRecentScore}>Show Recent Score</p>
            <p id="recent-score" class="recent"> {recentScore}%</p>  
           </div>
                
            </section>
            
            


            <section class="section-2">
            <img class= "social" src="https://static.wixstatic.com/media/11062b_777aa7089c8d4165b66a5633e6cf34f9~mv2.jpg/v1/fill/w_945,h_1152,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_777aa7089c8d4165b66a5633e6cf34f9~mv2.jpg"></img>
                <p></p>
                <h3>Anger Management</h3>
                
                <a class="test-link" href="/AmTest">Take test! </a> 
                 
              
          
           <div class="score-container">
            <p class="show-recent" onClick={AmRecentScore}>Show Recent Score</p>
            <p id="am-recent" class="recent"> {amRecentscore}%</p>  
           </div>

            </section>
            </div>
            <div class="line-graph">
                <Line 
               
                data={{
                    labels: ["Social Skills Test", "Anger Management Test"],
                    datasets: [
                        {
                            label: "Test Score",
                            data: [recentScore, amRecentscore],
                        },
                    ]
                }}
            
            /> 
            </div>
            
             
            </div>
           


            
        </div>


    )
}

export default Dashboard