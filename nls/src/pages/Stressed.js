import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Stressed.css"
import music from "../Components/Assets/789304__ilariio__midnight-serenade.mp3"



function Stressed () {
    
    /**Show list of coping strategies for anger when user clicks button*/
    function dropAnger() {
        document.getElementById("anger").classList.toggle("show");
    }

    /**Show list of Coping strategies when user clicks button*/
    function dropStress() {
        document.getElementById("stress").classList.toggle("show");
    }

    return (
        <div>
            <Header />
            <Nav />

            <div class="anger-container">
            <section class="anger-section">
                <img class= "social" src="https://media.tenor.com/RyTldCkbHYIAAAAM/inside-out-angry.gif"></img>
                <h3 class="cope">Coping Strategies for Anger</h3>
                <span class="bottom-corner">
                <button class="coping" onClick={dropAnger}>Click me if Angry  &#128545; </button>
                </span>
                
            </section>

            </div>

            <div class="anger-list" id="anger">
            <div class="list-container">
            <uo class="list">
                <p>Conduct the following practices to cope with your Anger!</p>
                <li>Count to 10 or 100 to help delay any inpiulsive reactions &#127744;</li>
                <li>Deep Breathing (10 second Intervals) &#128558;</li>
                <li>Physical Activity/Exercise &#127947;</li>
                <li>Relax any tense muscles &#129496;</li>
                <li>Take time off &#127774;</li>
            </uo>
            </div>
            
            </div>  

            <div class="anger-container">
            <section class="anger-section">
                <img class= "social" src="https://media.tenor.com/b1c73Q2odEMAAAAM/worried-kermit.gif"></img>
                <h3 class="cope">Coping Strategies for Stress</h3>
                <span class="bottom-corner">
                <button class="coping" onClick={dropStress}>Click me if Stressed  &#128552; </button>
                </span>
                
            </section>


            
            </div>

            <div class="anger-list" id="stress">
            <div class="list-container">
            <uo class="list">
                <p>Conduct the following practices to cope when you are stressed!</p>
                <li>Self-Care and Relaxation &#128522;</li>
                <li>Physical Activity/Exercise &#127939;</li>
                <li>Social Support and Connection &#128134;</li>
                <li>Time management and Orgnaization &#128187;</li>
                <li>Practice Positive Self-Affirmations &#128513;</li>
            </uo>
            </div>
            
            </div>   
        </div>
    )
}


export default Stressed