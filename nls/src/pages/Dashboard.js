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
     /*Gets scores from local storage so user can access in dashboard (this is subject to change due to security purposes)  */
    const amRecentscore = localStorage.getItem('Amfinalscore')
    const recentScore = localStorage.getItem("finalScore")
    const giRecentScore = localStorage.getItem("GifinalScore")

    /*Show recent score for social skills test */
    const ShowRecentScore =  async () => {
        document.getElementById("recent-score").classList.toggle("show");

        
    }
        /*Show recent score for anger management test */
    function AmRecentScore() {
        document.getElementById("am-recent").classList.toggle("show");
    }

    /*Show recent score for G.R.O.U.P Module Test*/
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
                
               
            <a class="test-link gp" href="/GITest"> <button class="start">Start Module!</button></a>      
              
          
           <div class="score-container gic"> 
            
            <p class="show-recent" onClick={GiRecentScore}><button class="start">Show Recent Score</button></p>
            <p id="gi-recent" class="recent"> {giRecentScore}%</p>  
           </div>

            </section>  


            <section>
                <img class= "social" src={image}></img>
                <p></p>
                <h3 class="mod-title">Social Skills Test</h3>
                
                <a class="test-link ss" href="/Test"> <button class="start">Start Module!</button></a> 
                 
              
          
           <div class="score-container ssc">
            <p class="show-recent" onClick={ShowRecentScore}> <button class="start">Show Recent Score</button></p>
            <p id="recent-score" class="recent"> {recentScore}%</p>  
           </div>
                
            </section>
            
            


            <section class="section-2">
            <img class= "social" src={image2}></img>
                <p></p>
                <h3 class="mod-title">Anger Management</h3>
                
                <a class="test-link am" href="/AmTest"><button class="start">Start Module!</button></a> 
                 
              
          
           <div class="score-container amc">
            <p class="show-recent" onClick={AmRecentScore}> <button class="start">Show Recent Score</button></p>
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