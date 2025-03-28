import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Stressed.css"
import music from "../Components/Assets/789304__ilariio__midnight-serenade.mp3"



function Stressed () {
    
    let audio = new Audio(music)
    /**Show list */
    function dropAnger() {
        document.getElementById("anger").classList.toggle("show");
    }

    /**Show list */
    function dropStress() {
        document.getElementById("stress").classList.toggle("show");
    }

    /*Plays music */
    function Playmusic() {
         audio(music).play()
        document.getElementById("play").style.display="none"
        
    }

    function Pausemusic() {
         audio(music).pause()
    }


    
    /*Additional code for pla */
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
                <button class="coping" id="play" onClick={Playmusic}>Play Music</button>
                <button class= "coping" onClick={Pausemusic}>Pause Music</button>
                </span>
                
            </section>

            </div>

            <div class="anger-list" id="anger">
            <div class="list-container">
            <uo class="list">
                <li>Count to 10 or 100 to help delay any inpiulsive reactions &#127744;</li>
                <li>Deep Breathing &#128558;</li>
                <li>Physical Activity/Exercise &#127947;</li>
                <li>Relax any tense muscles &#129496;</li>
                <li>Take time off &#127774;</li>
            </uo>
            </div>
            
            </div>  

            <div class="anger-container">
            <section class="anger-section">
                <img class= "social" src="data:image/jpeg;base64,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"></img>
                <h3 class="cope">Coping Strategies for Stress</h3>
                <span class="bottom-corner">
                <button class="coping" onClick={dropStress}>Click me if Stressed  &#128552; </button>
                </span>
                
            </section>


            
            </div>

            <div class="anger-list" id="stress">
            <div class="list-container">
            <uo class="list">
                <li>Self-Care and Relaxation &#127744;</li>
                <li>Exercise &#128558;</li>
                <li>Social Support and Connection &#127947;</li>
                <li>Time management and Orgnaization &#129496;</li>
                <li>Practoce Positive Self-Affirmations &#127774;</li>
            </uo>
            </div>
            
            </div>   
        </div>
    )
}


export default Stressed