import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Stressed.css"
import Footer from "../Components/Footer";


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
                    <div class="social-section"><img class="social" src="https://t3.ftcdn.net/jpg/04/61/81/38/240_F_461813882_AXgZWIdXUl3qImbSTxm7LBKk074hvoSy.jpg"></img>
                        <h3 class="mod-title">Feeling Angry?</h3>
                    </div>

                    <span class="bottom-corner">
                        <button class="coping" onClick={dropAnger}>^ </button>
                    </span>

                </section>

            </div>

            <div class="anger-list" id="anger">
                <div class="list-container">
                    <ul class="list">
                        <p>Conduct the following practices to cope with your anger: </p>
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
                        <img class="social" src="https://t3.ftcdn.net/jpg/06/48/83/38/240_F_648833853_k37KRCVYdWUwEY3xWH31L0PqEhe2Jmp5.jpg"></img>
                        <h3 class="mod-title">Feeling Stressed?</h3>

                    </div>

                    <span class="bottom-corner">
                        <button class="coping" onClick={dropStress}>^ </button>
                    </span>

                </section>



            </div>

            <div class="anger-list" id="stress">
                <div class="list-container">
                    <ul class="list">
                        <p>Try the following practices to help cope when you are stressed: </p>
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

                        <img class="social" src="https://t3.ftcdn.net/jpg/00/01/77/56/240_F_1775674_nRpydnbG3ZNBTvaj2hMexcHZNgTH4j.jpg"></img>
                        <h3 class="mod-title">Feeling Sad?</h3>
                    </div>

                    <span class="bottom-corner">
                        <button class="coping" onClick={dropSad}>^ </button>
                    </span>

                </section>



            </div>

            <div class="anger-list" id="sad">
                <div class="list-container">
                    <ul class="list">
                        <p>Try these practices to help you cope when you're feeling sad:</p>

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

                        <img class="social" src="https://t4.ftcdn.net/jpg/02/37/75/39/240_F_237753910_L4jbpbqeVPDYxFp69MyiaX9ZaeSxSfXe.jpg"></img>
                        <h3 class="mod-title">Feeling Anxious?</h3>


                    </div>

                    <span class="bottom-corner">
                        <div class="cope-btn-container">
                            <button class="coping" onClick={dropAnx}>^ </button>
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
            <Footer />
        </div>
    )
}


export default Stressed