import React from "react"
import Header from "../Components/Header"
import "./Dashboard.css"
import Nav from "../Components/Nav"
import {Chart as ChartJS } from "chart.js/auto"
import {Bar, Doughnut, Line} from "react-chartjs-2"
import image from "../Components/Assets/iStock-2161532635.jpg"
import image2 from "../Components/Assets/iStock-2040987615.jpg"
import image3 from "../Components/Assets/iStock-901420250.jpg"


function Dashboard() {
    const amRecentscore = sessionStorage.getItem('Amfinalscore')
    const recentScore = sessionStorage.getItem("finalScore")
    const giRecentScore = sessionStorage.getItem("GifinalScore")
    function ShowRecentScore() {
        document.getElementById("recent-score").classList.toggle("show");
    }

    function AmRecentScore() {
        document.getElementById("am-recent").classList.toggle("show");
    }

    function GiRecentScore() {
        document.getElementById("gi-recent").classList.toggle("show");
    }


    
    return (
        
        <div class="body">
            <Header />
            <Nav />
            <div class="statement">
            <h2 class="learning-statement">Today we are learning...</h2>
            <div class="test-container">
            <section>
                <img class= "social" src={image}></img>
                <p></p>
                <h3>Social Skills Test</h3>
                
                <a class="test-link ss" href="/Test">Take test! </a> 
                 
              
          
           <div class="score-container ssc">
            <p class="show-recent" onClick={ShowRecentScore}>Show Recent Score</p>
            <p id="recent-score" class="recent"> {recentScore}%</p>  
           </div>
                
            </section>
            
            


            <section class="section-2">
            <img class= "social" src={image2}></img>
                <p></p>
                <h3>Anger Management</h3>
                
                <a class="test-link am" href="/AmTest">Take test! </a> 
                 
              
          
           <div class="score-container amc">
            <p class="show-recent" onClick={AmRecentScore}>Show Recent Score</p>
            <p id="am-recent" class="recent"> {amRecentscore}%</p>  
           </div>

            </section>   

            

            <section class="section-2">
            <img class= "social" src={image3}></img>
                <p></p>
                <h3>G.R.O.U.P Introduction</h3>
                
                <a class="test-link " href="/GITest">Take test! </a> 
                 
              
          
           <div class="score-container">
            <p class="show-recent" onClick={GiRecentScore}>Show Recent Score</p>
            <p id="gi-recent" class="recent"> {giRecentScore}%</p>  
           </div>

            </section>   






             <div class="line-graph">
                <Bar 
               
                data={{
                    labels: ["Social Skills Test", "Anger Management Test", "G.R.O.U.P Introduction Test"],
                    datasets: [
                        {
                            label: "Test Score",
                            data: [recentScore, amRecentscore, giRecentScore],
                        },
                    ]
                }}
            
            /> 
            </div>
            </div>
        
            
             
            </div>
           


            
        </div>


    )
}

export default Dashboard