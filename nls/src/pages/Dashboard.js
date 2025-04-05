import React,{useState} from "react"
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
    const [goals, setGoals] = useState("");
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

    function noteDropdown() {
        document.getElementById("dropdown-content").classList.toggle("show");
    }

    function ssnoteDropdown() {
        document.getElementById("ssdropdown-content").classList.toggle("show");
    }

    
    function amnoteDropdown() {
        document.getElementById("amdropdown-content").classList.toggle("show");
    }

    const handleSubmit = () => {
        localStorage.setItem("Goals", goals)

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
            
            <div class="note-container">
            <div></div>
            <button class="back-dashboard goal-btn" onClick={noteDropdown}> Set Goals &#8964;</button>
            <div id="dropdown-content" class="drop">
            <div class="textarea">
              <textarea id="gi-goals" class="text" onChange={(e) => {setGoals(e.target.value);}}></textarea>
              <button class="submit-goals" onClick={handleSubmit}>Submit</button>   
            </div>
            </div>
         


            </div>
          


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

            <div class="note-container ss-goals">
            <button class="back-dashboard goal-btn" onClick={ssnoteDropdown}> Set Goals &#8964;</button>
            <div id="ssdropdown-content" class="drop">
            <div class="textarea">
              <textarea id="gi-goals" class="text" onChange={(e) => {setGoals(e.target.value);}}></textarea>
              <button class="submit-goals" onClick={handleSubmit}>Submit</button>   
            </div>
            </div>
           


            </div>

            
            
            


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

            <div class="note-container">
            <button class="back-dashboard goal-btn" onClick={amnoteDropdown}> Set Goals &#8964;</button>
            <div id="amdropdown-content" class="drop">
            <div class="textarea">
              <textarea id="gi-goals" class="text" onChange={(e) => {setGoals(e.target.value);}}></textarea>
              <button class="submit-goals" onClick={handleSubmit}>Submit</button>   
            </div>
            </div>
           


            </div>  

            

             






            
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