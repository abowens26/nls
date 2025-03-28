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
    const ssModheaders = ["Social Skills Presentation", testname];


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
    const positiveAffirmation = ["Great Job!", "Keep Going!", "Better Luck Next Time!", "Keep working you got this!", ":("]

    /*Show and hide elements when module starts */
    const startModule = () => {
        document.getElementById("ss-title").style.display = "none";
        document.getElementById("s-title").innerHTML = ssModheaders[0];
        document.getElementById("start").hidden = true;
        document.getElementById("ppt").style.display = "block";
        document.getElementById("startquiz").style.display = "block"
        document.getElementById("content").innerHTML = "Go through the slides and start quiz when you are ready!!";

    }


    /*Show and hide elements when module starts */
    const startQuiz = () => {
        document.getElementById("s-title").innerHTML = ssModheaders[1];
        document.getElementById("ssquestion").style.display = "block";
        document.getElementById("ppt").style.display = "none";
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
            document.getElementById("message").innerHTML = positiveAffirmation[0];

        } else if (finalScore <= 79 && finalScore >= 60) {
            document.getElementById("message").innerHTML = positiveAffirmation[1]
        } else if (finalScore <= 59 && finalScore >= 40) {
            document.getElementById("message").innerHTML = positiveAffirmation[2]
        } else if (finalScore <= 39 && finalScore >= 20) {
            document.getElementById("message").innerHTML = positiveAffirmation[3]
        } else if (finalScore < 20) {
            document.getElementById("message").innerHTML = positiveAffirmation[4]
        }

         /*Post and save score into mongoDB atlas database */
        try {
            await fetch("http://localhost:4001/api/score", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    testname: testname,
                    user: email,
                    score: finalScore

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
                    id="ppt"
                    src="https://1drv.ms/p/c/b9f038b663af0215/IQR_AfyLXU5sRqsnVRiPvLxtAcPCsCUbsEhzoKszXqP1Cf8?em=2&amp;wdAr=1.7777777777777777"
                    class="ppt"
                    width="800px"
                    height="450px"
                    frameborder="10">This is an embedded
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
                <h2 class="final-score-container" id="message"></h2>
                <div class="final-score-container">
                    <button class="back-dashboard back" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>
                </div>


            </div>







        </div>
    )
}

export default Sstest