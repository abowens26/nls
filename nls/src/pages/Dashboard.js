import React, { useEffect, useState } from "react"
import Header from "../Components/Header"
import "./Dashboard.css"
import Nav from "../Components/Nav"
import { Chart as ChartJS } from "chart.js/auto"
import { Bar, Doughnut, Line } from "react-chartjs-2"
import image from "../Components/Assets/iStock-2161532635.jpg"
import image2 from "../Components/Assets/iStock-2040987615.jpg"
import image3 from "../Components/Assets/iStock-901420250.jpg"
import supabase from "../helper/supabaseClient"
import { NavLink } from "react-router-dom"
import Footer from "../Components/Footer"
function Dashboard() {

    const [email, setEmail] = useState("")
    const [score, setScore] = useState(null)
    const [scoreGI, setScoreGI] = useState(null);
    const [scoreAm, setScoreAm] = useState(null);

    useEffect(() => {
        console.log('render')

    })


    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (data?.user) {
                setEmail(data.user.email);
            }
        };
        fetchUser();
    }, []);


//Fetch score for Social Skills Test for user
    useEffect(() => {
     
        const fetchScore = async () => {
            try {

                const response = await fetch(`https://nls-api.onrender.com/api/score?user=${email}&testname=Social Skills Test`);
                const data = await response.json();
                console.log(data);
                setScore(data);

            } catch (error) {
                console.log("Could not fetch score");
            }

        }
        fetchScore();
    }, [email])


    //Fetch score for G.R.O.U.P Introduction for user 
    useEffect(() => {
     
        const fetchGIScore = async () => {
            try {

                const response = await fetch(`https://nls-api.onrender.com/api/score?user=${email}&testname=G.R.O.U.P Introduction`);
                const data = await response.json();
                console.log(data);
                setScoreGI(data);

            } catch (error) {
                console.log("Could not fetch score");
            }

        }
        fetchGIScore();
    }, [email])


    //Fetch score from Anger Management for user 
    useEffect(() => {
       
        const fetchAmScore = async () => {
            try {

                const response = await fetch(`https://nls-api.onrender.com/api/score?user=${email}&testname=Anger Management Test`);
                const data = await response.json();
                console.log(data);
                setScoreAm(data);

            } catch (error) {
                console.log("Could not fetch score");
            }

        }
        fetchAmScore();
    }, [email])

    /*Gets scores from local storage so user can access in dashboard (this is subject to change due to security purposes)  */
    const [goals, setGoals] = useState("");
    /*Show recent score for social skills test */
    const ShowRecentScore = async () => {
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
   
    







//Front end code for the Application's dashboard for the user 
    return (

        <div class="body">
            <Header />
            <Nav />


            <h1 class="learning-statement">Modules</h1>
                <div class="test-container">



                    <section class="section-2" >
                        <div class="mod-title-container">
                        <img class="social" src="https://thumbs.dreamstime.com/b/group-children-playing-football-friends-park-153633026.jpg"></img>
                        <h3 class="mod-title"><NavLink className="mod-nav" exact to="/GIMod">G.R.O.U.P Introduction</NavLink></h3>
                        </div>
                        
                        
                        <div class="score-container">

                        
                        <button class="show-score" onClick={GiRecentScore}>Show Recent Score</button>
                            <span id="gi-recent" class="recent"> {scoreGI ? scoreGI.score : "Loading"}%</span>
                       </div>

                    </section>




                    <section class="section-2">
                        <div class="mod-title-container">

                        
                        <img class="social" src="https://t4.ftcdn.net/jpg/05/91/40/99/240_F_591409920_XjHiNwSiy23Km2amxbvO7YTHZHOmtEzR.jpg"></img>
                        <h3 class="mod-title"><NavLink className="mod-nav" exact to="/SSMod">Social Skills</NavLink></h3>
                       </div>
                       



                        <div class="score-container">
                             <button class="show-score ss " onClick={ShowRecentScore}>Show Recent Score</button>
                            <p id="recent-score" class="recent">{score ? score.score : "Loading"}% </p>
                        </div>

                    </section>






                    <section class="section-2">
                        <div class="mod-title-container">
                        <img class="social" src="https://t3.ftcdn.net/jpg/05/24/16/64/240_F_524166481_CdCg5rkxwPQvcDbdlEr1zFSMYSLhfIHl.jpg"></img>
                        <h3 class="mod-title"><NavLink className="mod-nav" exact to="/AmMod">Anger Management</NavLink></h3>
                        </div>



                        <div class="score-container">
                        <button class="show-score am" onClick={AmRecentScore}>Show Recent Score</button>
                            <p id="am-recent" class="recent"> {scoreAm ? scoreAm.score : "Loading"}%</p>
                            
                        </div>

                    </section>

                    <div class="line-graph">
                    <h2></h2>
          <Bar 
               
                data={{
                  
                    labels: ["G.R.O.U.P Introduction", "Social Skills", "Anger Management" ],
                    datasets: [
                        {
                            label: "Test Score",
                            data: [scoreGI?.score , score?.score, scoreAm?.score],
                            backgroundColor: "rgba(185, 229, 230, 1)",
                            hoverBackgroundColor: "rgba(161, 202, 246, 1)",
                            
                        },
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Student Progress Through Each Module',
                            font: {
                                size: 24,
                            },
                            color: 'Black'
                        }
                    },
                    scales: {
                        y: {  
                            max: 100,
                        title: {
                            display: true,
                            text: "Score",
                            font: {
                                size: 20,
                                weight: "bold",
                            },
                            color: 'Black'
                        },

                        },

                        x: {
                            title: {
                                display: true,
                                text: "Modules",
                                font: {
                                    size: 20,
                                    weight: "bold",
                                },
                                color: 'black'
                            }
                        }
                      
                    },

                }}

/>


                </div>











                </div>

             

          


                <Footer />

        </div>


    )
}

export default Dashboard