import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Stressed.css"



function Stressed() {

    /**Show list of coping strategies for anger when user clicks button*/
    function dropAnger() {
        document.getElementById("anger").classList.toggle("show1");
    }

    /**Show list of Coping strategies when user clicks button*/
    function dropStress() {
        document.getElementById("stress").classList.toggle("show1");
    }

    /**Show list of Coping strategies when user clicks button*/
    function dropSad() {
        document.getElementById("sad").classList.toggle("show1");
    }

    /**Show list of Coping strategies when user clicks button*/
    function dropAnx() {
        document.getElementById("anxiety").classList.toggle("show1");
    }

    return (
        <div>
            <Header />
            <Nav />
        <h1 class="page-title">Coping Strategies</h1>
            <div class="anger-container">
                
                <section class="anger-section">
                    <div class="social-section"><img class="social" src="https://media.tenor.com/RyTldCkbHYIAAAAM/inside-out-angry.gif"></img>
                        <h3 class="cope">Feeling Angry?</h3>
                    </div>

                    <span class="bottom-corner">
                        <button class="coping" onClick={dropAnger}>&#129171; </button>
                    </span>

                </section>

            </div>

            <div class="anger-list" id="anger">
                <div class="list-container">
                    <ul class="list">
                        <p>Conduct the following practices to cope with your Anger!</p>
                        <li>Count to 10 or 100 to help delay any impulsive reactions </li>
                        <li>Deep Breathing (10 second Intervals) </li>
                        <li>Physical Activity/Exercise </li>
                        <li>Relax Any Tense Muscles </li>
                        <li>Take Time Off </li>


                    </ul>


                </div>

            </div>

            <div class="anger-container">
                <section class="anger-section">
                    <div class="social-section">
                        <img class="social" src="https://media.tenor.com/b1c73Q2odEMAAAAM/worried-kermit.gif"></img>
                        <h3 class="cope">Feeling Stressed?</h3>

                    </div>

                    <span class="bottom-corner">
                        <button class="coping" onClick={dropStress}>&#129171; </button>
                    </span>

                </section>



            </div>

            <div class="anger-list" id="stress">
                <div class="list-container">
                    <ul class="list">
                        <p>Conduct the following practices to cope when you are stressed!</p>
                        <li>Self-Care and Relaxation </li>
                        <li>Physical Activity/Exercise </li>
                        <li>Social Support and Connection </li>
                        <li>Time management and Orgnaization </li>
                        <li>Practice Positive Self-Affirmations </li>
                    </ul>

                </div>

            </div>



            <div class="anger-container">
                <section class="anger-section">
                    <div class="social-section">

                        <img class="social" src="https://media.tenor.com/BYZf0mMHcY4AAAAM/%E7%9A%849.gif"></img>
                        <h3 class="cope">Feeling Sad?</h3>
                    </div>

                    <span class="bottom-corner">
                        <button class="coping" onClick={dropSad}>&#129171; </button>
                    </span>

                </section>



            </div>

            <div class="anger-list" id="sad">
                <div class="list-container">
                    <ul class="list">
                        <p>Try these practices to help you cope whenm you're feeling sad:</p>

                        <li>Talk to someone you trust - you are not alone!</li>
                        <li>Get outside for fresh air and sunlight </li>
                        <li>Do something creative: draw, write, or play music </li>
                        <li>Reflect in a journal: "What am I feeling? What do I need right now?" </li>
                        <li>Practice self-kindness </li>

                    </ul>

                </div>

            </div>


            <div class="anger-container">
                <section class="anger-section">
                    <div class="social-section">

                        <img class="social" src="https://media1.tenor.com/m/tu2sP0ZLQjIAAAAC/rainbow-spongebob.gif"></img>
                        <h3 class="cope">Feeling Anxious?</h3>


                    </div>

                    <span class="bottom-corner">
                        <div class="cope-btn-container">
                            <button class="coping" onClick={dropAnx}>&#129171; </button>
                        </div>

                    </span>

                </section>



            </div>

            <div class="anger-list" id="anxiety">
                <div class="list-container">
                    <ul class="list">
                        <p>When anxiety starts to take over, try these grounding and calming strategies:</p>

                        <li>Listen to nature sounds or calming music</li>
                        <li>Repeat Calming affirmations: "I am safe. I can do this!" </li>
                        <li>Focus on what you CAN control </li>
                        <li>Limit screen time and unplug from overwhelming news and social media </li>
                        <li>Practice deep breathing - inhale for 4, hold for 4, exhale for 4 </li>

                    </ul>

                </div>

            </div>
        </div>
    )
}


export default Stressed