import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Stressed.css"



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
                <li>Count to 10 or 100 to help delay any impulsive reactions &#127744;</li>
                <li>Deep Breathing (10 second Intervals) &#128558;</li>
                <li>Physical Activity/Exercise &#127947;</li>
                <li>Relax Any Tense Muscles &#129496;</li>
                <li>Take Time Off &#127774;</li>

                <p>Watch this video for a breathing exercise!</p>
                <iframe width="300" height="200" src="https://www.youtube.com/embed/RiMb2Bw4Ae8" title="Belly Breathing: Mindfulness for Children" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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