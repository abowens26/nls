import React from "react";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Resources.css"
import Footer from "../Components/Footer";

function Resources() {
    /*Page for links to outside resources for users  */
      /**Show list of coping strategies for anger when user clicks button*/
      function dropArticle() {
        document.getElementById("articles").classList.toggle("show");
    }

    /**Show list of Coping strategies when user clicks button*/
    function dropVideo() {
        document.getElementById("videos").classList.toggle("show");
    }

    /**Show list of Coping strategies when user clicks button*/
    function dropPod() {
        document.getElementById("podcast").classList.toggle("show");
    }

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
            <h1 class="page-title">Additional Resources</h1>

            <div class="resource-container">



                <div class="article-container">
                    <section class="anger-section">
                        <div class="social-section"><img class="social" src="https://c.pxhere.com/photos/ff/eb/newspapers_leeuwarder_courant_press_news_daily_newspaper-937591.jpg!s1"></img>
                            <h3 class="mod-title">Articles</h3>
                        </div>

                        <span class="bottom-corner">
                            <button class="coping" onClick={dropArticle} >^ </button>
                        </span>

                    </section>
                    <div class="none">

                    
                    <div class="resource-content">
                        <div class="articles" id="articles">
                            <h2 class="resource-title">Articles</h2>
                            <ul>

                                <li><a class="resource-list" target="_blank" href="https://summer.harvard.edu/blog/managing-stress-in-high-school/
">Managing Stress in High School - Harvard Summer School</a>
                                </li>
                                <li><a class="resource-list" target="_blank" href="https://www.healthychildren.org/English/healthy-living/emotional-wellness/Building-Resilience/Pages/healthy-mental-and-emotional-development-in-children-key-building-blocks.aspx?gad_source=1">Healthy mental & Emotional development: 4 key building blocks</a></li>
                                <li><a class="resource-list" target="_blank" href="https://www.mghclaycenter.org/parenting-concerns/11-self-care-tips-for-teens-and-young-adults/">11 Self-Care Tips for Teens and Young adults</a></li>
                                <li><a class="resource-list" target="_blank" href="https://www.betterhelp.com/advice/teenagers/self-care-for-teens-benefits-of-regular-exercise-sleep-and-more-for-mental-health/">Self-Care for Teens: Benefits of regular exercise, sleep, & more for mental health | BetterHelp</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="video-container">

                    <section class="anger-section">
                        <div class="social-section"><img class="social" src="https://www.electronicshub.org/wp-content/uploads/2022/04/best-cheap-cameras-for-youtube.jpg"></img>
                            <h3 class="mod-title">Videos</h3>
                        </div>

                        <span class="bottom-corner">
                            <button class="coping" onClick={dropVideo}> ^ </button>
                        </span>

                    </section>
                    <div class="resource-content">
                        <div class="videos" id="videos">
                            <h2 class="resource-title subtitle">Videos</h2>
                            <ul>
                                <div class="video-row">
                                    <li>
                                        <p class="yt-titles"></p>
                                        <iframe class="yt" width="300" height="200"
                                            src="https://www.youtube.com/embed/5BuHC8wBdBU"
                                            title="Self-Esteem For Kids - 10 Ways To Build Self-Esteem &amp; Self-Confidence"
                                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                        </iframe>
                                    </li>
                                    <li>
                                        <p class="yt-titles"></p>
                                        <iframe class="yt" width="300" height="200"
                                            src="https://www.youtube.com/embed/nCrjevx3-Js"
                                            title="Talking Mental Health"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                        </iframe>
                                    </li>
                                </div>
                                <div class="video-row rowtwo">
                                    <li>
                                        <p class="yt-titles"></p>
                                        <iframe class="yt" width="300" height="200"
                                            src="https://www.youtube.com/embed/1qq7lDL-bzY"
                                            title="Why students should have mental health days | Hailey Hardcastle"
                                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                        </iframe>



                                    </li>
                                    <li>
                                        <p class="yt-titles"></p>
                                        <iframe class="yt" width="300" height="200" src="https://www.youtube.com/embed/RiMb2Bw4Ae8"
                                            title="Belly Breathing: Mindfulness for Children" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                                        </iframe>
                                    </li>
                                </div>
                                <li>
                                    <p></p>
                                    <div class="last-row">
                                        <iframe class="yt" width="300" height="200"
                                            src="https://www.youtube.com/embed/L9zwduYp9G0"
                                            title="Belly Breathing: Mindfulness for Children"
                                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                                        </iframe>
                                    </div>



                                </li>


                            </ul>



                        </div>
                    </div>





                </div>

                <div class="article-container podcasts">

                    <section class="anger-section">
                        <div class="social-section"><img class="social" src="https://wallpapercave.com/wp/wp7293419.jpg"></img>
                            <h3 class="mod-title">Podcasts</h3>
                        </div>

                        <span class="bottom-corner">
                            <button class="coping" onClick={dropPod} >^ </button>
                        </span>

                    </section>
                    <div class="resource-content poddrop">
                        <div class="videos" id="podcast">
                            <h2 class="resource-title">Podcasts</h2>
                            <ul>

                                <iframe class="pod" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/how-friends-shape-who-we-are/id1567253248?i=1000703732591"></iframe>
                                <iframe class="pod" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" src="https://embed.podcasts.apple.com/us/podcast/episode-97-kids-screen-time-play-time/id1583928305?i=1000702851209"></iframe>

                            </ul>
                        </div>
                    </div>

                </div>

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
            </div>


        <Footer />
        </div>

      

    )

}

export default Resources