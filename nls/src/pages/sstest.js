import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import './sstest.css'
import questionbank from "../Components/Assets/questionbank";
import supabase from "../helper/supabaseClient";


/*Code for Social Skills Module */ 
function Sstest() {
    /**Initilaize test elements */
    const [email, setEmail] = useState("");
    const testname = "Social Skills Test"
    const [score, setScore] = useState(0)
    const finalScore = (score / questionbank.length) * 100
    const roundedScore = Math.round(finalScore * 10) / 10
    const ssModheaders = ["Social Skills Video", testname];
    const [positiveAffirmation, setPostiveAffirmation] = useState("")

/*Fetch user from Supabase database for test */
    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            if (data?.user) {
                setEmail(data.user.email);
            }
        };
        fetchUser();
    });

    /*Initialize question and option variables */
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    /*Show and hide elements when module starts */
    const startModule = () => {
        document.getElementById("ss-title").style.display = "none";
        document.getElementById("s-title").innerHTML = ssModheaders[0];
        document.getElementById("start").hidden = true;
        document.getElementById("vid").style.display = "block";
        document.getElementById("startquiz").style.display = "block"
        document.getElementById("content").innerHTML = "Watch the video and start the quiz when you are ready!";

    }


    /*Show and hide elements when module starts */
    const startQuiz = () => {
        document.getElementById("s-title").innerHTML = ssModheaders[1];
        document.getElementById("ssquestion").style.display = "block";
        document.getElementById("vid").style.display = "none";
        document.getElementById("startquiz").style.display = "none";
        document.getElementById("next-btn").style.visibility = "visible";
        document.getElementById("content").style.display = "none";


    }

    /*Switch to next question when user clicks the "next" button*/
    const nextQuestion = () => {

         /*Increases the score if user picks correct answer*/
        if (questionbank[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }


    const submitQuiz = async () => {
        let newtestScore = score;

        if (questionbank[currentQuestion].Answer === optionChosen) {
            newtestScore = score + 1
            setScore(newtestScore);
        }

          /*Calculates score percentage based on how well user does */
        const finalScore = (newtestScore / questionbank.length) * 100
         /*Rounds the score to the nearest tenth */
        const roundedScore = Math.round(finalScore * 10) / 10
         /*Insert score into local storage so user can access in dashboard (this is subject to change due to security purposes)  */
        localStorage.setItem("finalScore", roundedScore)
          /*Show and hide elements when quiz ends */
        document.getElementById("submit").hidden = true;
        document.getElementById("option1").hidden = true;
        document.getElementById("option2").hidden = true;
        document.getElementById("option3").hidden = true;
        document.getElementById("option4").hidden = true;
        document.getElementById("question").hidden = true;
        document.getElementById("box-score").classList.toggle("show");
        document.getElementById("back").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("s-title").style.display = "none";

        /*Show different affirmation messages based on test score */
        if (finalScore <= 100 &&  finalScore >= 80) {
            setPostiveAffirmation("Great Job! :)")
         } else if (finalScore <= 79 && finalScore >= 60) {
             setPostiveAffirmation("You're Almost there!")
         } else if (finalScore <= 59 && finalScore >= 40) {
            setPostiveAffirmation("Keep Going!")
         } else if (finalScore <= 39 && finalScore >= 20) {
             setPostiveAffirmation("Better Luck Next Time!")
         } else if (finalScore < 20) {
            setPostiveAffirmation(">:(")
         }

         /*Post and save score into mongoDB atlas database */
        try {
            await fetch("https://nls-api.onrender.com/api/score", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    testname: testname,
                    user: email,
                    score: roundedScore

                })
            });
            console.log("score saved!")
        } catch (error) {
            console.log("unable to save score", error)
        }

    };









    return (
        <div>
            <Header />
            <button class="back-dashboard back" id="back" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>

            <div class="sstitle">
                <h3 class="test-title" id="ss-title">Welcome to the Social Skills Module!</h3>
                <h3 class="s-title" id="s-title"></h3>
            </div>


            <div class="content-container">
                <p id="content"></p>
            </div>

            <div class="start-btn-container" id="mod-btns">
                <button class="back-dashboard quiz" id="startquiz" onClick={startQuiz}>Start Quiz</button>
                <iframe
                 width="800px" 
                 id="vid"
                 class="vid"
                 height="450"
                  src="https://www.youtube.com/embed/IcUR8NxLdG4" 
                title="Social Skills For Kids - Ways To Improve Social Skills For Elementary-Middle School" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                 </iframe>
                <button class="back-dashboard" id="start" onClick={startModule}> Start</button>

            </div>



            <div id="ssquestion" class="question">
                <p id="question">{questionbank[currentQuestion].question}</p>
                <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank[currentQuestion].option1}</button><br></br>
                <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank[currentQuestion].option2}</button><br></br>
                <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank[currentQuestion].option3}</button><br></br>
                <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank[currentQuestion].option4}</button><br></br>



            </div>

            <div class="grid">
                <button id="submit" class="back-dashboard submit" onClick={submitQuiz} disabled={currentQuestion !== questionbank.length - 1}>Submit</button>
                <button class="back-dashboard quiz-ss" id="next-btn" onClick={nextQuestion} disabled={currentQuestion === questionbank.length - 1}>Next</button>

            </div>

            <div class="final-score-box" id="box-score">
                <div class="final-score-container">
                    <h2 class="final-score">{roundedScore}%</h2><br></br>
                </div>
                <h2 class="final-score-container" id="message">{positiveAffirmation}</h2>
                <div class="final-score-container">
                    <button class="back-dashboard back" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>
                </div>


            </div>







        </div>
    )
}

export default Sstest