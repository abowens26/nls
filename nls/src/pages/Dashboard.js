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
    const ShowRecentScore =  async () => {
        document.getElementById("recent-score").classList.toggle("show");

        try {
            const send = await fetch("http://localhost:4001/api/score", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }, 

            });
            console.log("score saved!")
        } catch (error) {
            console.log("unable to save score", error)
        }
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
         

            <h2 class="learning-statement">Today we are learning...</h2> 
         <div class="statement">
            <div class="test-container">
            
            
            
            <section class="section-2">
            <img class= "social" src={image3}></img>
                <p></p>
                <h3 class="mod-title">G.R.O.U.P Introduction</h3>
                
                <a class="test-link gp" href="/GITest">Start Module!</a> 
                 
              
          
           <div class="score-container gic">
            <p class="show-recent" onClick={GiRecentScore}>Show Recent Score</p>
            <p id="gi-recent" class="recent"> {giRecentScore}%</p>  
           </div>

            </section>  


            <section>
                <img class= "social" src={image}></img>
                <p></p>
                <h3 class="mod-title">Social Skills Test</h3>
                
                <a class="test-link ss" href="/Test">Start Module!</a> 
                 
              
          
           <div class="score-container ssc">
            <p class="show-recent" onClick={ShowRecentScore}>Show Recent Score</p>
            <p id="recent-score" class="recent"> {recentScore}%</p>  
           </div>
                
            </section>
            
            


            <section class="section-2">
            <img class= "social" src={image2}></img>
                <p></p>
                <h3 class="mod-title">Anger Management</h3>
                
                <a class="test-link am" href="/AmTest">Start Module!</a> 
                 
              
          
           <div class="score-container amc">
            <p class="show-recent" onClick={AmRecentScore}>Show Recent Score</p>
            <p id="am-recent" class="recent"> {amRecentscore}%</p>  
           </div>

            </section>   

            

             






            
            </div>
        
             <div class="line-graph">
                <h2></h2>
                <Line 
               
                data={{
                  
                    labels: ["G.R.O.U.P Introduction Test", "Social Skills Test", "Anger Management Test" ],
                    datasets: [
                        {
                            label: "Test Score",
                            data: [giRecentScore, recentScore, amRecentscore],
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                  

                }}
            
            /> 
            </div>
             
            </div>
           


            
        </div>


    )
}

export default Dashboard