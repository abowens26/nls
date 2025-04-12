import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import './amtest.css'
import questionbank2 from "../Components/Assets/questionbank2";
import supabase from "../helper/supabaseClient";

/*Code for Anger Management Module */ 
function Amtest() {

    /*Initialize test variables */
    const testname = "Anger Management Test"
    const [score, setScore] = useState(0)
    const finalScore = (score / questionbank2.length) * 100
    const roundedScore = Math.round(finalScore * 10) / 10
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    const [email, setEmail] = useState("")
    const amModheaders = ["Anger Management Presentation", testname];
    const [positiveAffirmation, setPostiveAffirmation] = useState("")
    /*Fetch user from Supabase database for the quiz */
    
    useEffect(() => {
        const fetchUser = async () => {
            const {data} = await supabase.auth.getUser();
            if(data?.user) {
                setEmail(data.user.email);
            }
        };
        fetchUser();
    },[])

    /*Show and hide elements when module starts */
    const startModule = () => {
        document.getElementById("am-title").style.display = "none";
        document.getElementById("a-title").innerHTML = amModheaders[0];
        document.getElementById("start").hidden = true;
        document.getElementById("ppt").style.display = "block";
        document.getElementById("startquiz").style.display = "block"
        document.getElementById("content").innerHTML = "Go through the slides and start quiz when you are ready!!";

    }


    /*Show and hide elements when quiz starts  */
    const startQuiz = () => {
        document.getElementById("a-title").innerHTML = amModheaders[1];
        document.getElementById("amquestion").style.display = "block";
        document.getElementById("ppt").style.display = "none";
        document.getElementById("startquiz").style.display = "none";
        document.getElementById("amnext-btn").style.visibility="visible"
        document.getElementById("content").style.display = "none";
    }




    /*Switch to next question when user clicks the "next" button*/
    const nextQuestion = () => {

         /*Increases the score if user picks correct answer*/
        if (questionbank2[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }


    const submitQuiz = async () => {

        let newtestScore = score;


        if (questionbank2[currentQuestion].Answer === optionChosen) {
            newtestScore = score + 1
            setScore(newtestScore);
        }
          /*Calculates score percentage based on how well user does */
        const finalScore = (newtestScore / questionbank2.length) * 100
            /*Rounds the score to the nearest tenth */
        const roundedScore = Math.round(finalScore * 10) / 10
            /*Insert score into local storage so user can access in dashboard (this is subject to change due to security purposes)  */
        localStorage.setItem("Amfinalscore", (roundedScore));
             /*Show and hide elements when quiz ends */
        document.getElementById("submit").hidden = true;
        document.getElementById("option1").hidden = true;
        document.getElementById("option2").hidden = true;
        document.getElementById("option3").hidden = true;
        document.getElementById("option4").hidden = true;
        document.getElementById("question").hidden = true;
        document.getElementById("box-score").classList.toggle("show");
        document.getElementById("back").style.display = "none";
        document.getElementById("amnext-btn").style.display = "none";
        document.getElementById("a-title").style.display = "none";

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
        //The link within fetch WILL be an environment variable when connected to mongoDB
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

    }









    return (
        <div>
            <Header />
            <button class="back-dashboard back" id="back" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>


            <div>
                <h3 class="test-title" id="am-title">Welcome to the Anger Management Module!</h3>
                <h3 class="a-title" id="a-title"></h3>
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




            <div class="amquestion" id="amquestion">
                <p id="question">{questionbank2[currentQuestion].question}</p>
                <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank2[currentQuestion].option1}</button><br></br>
                <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank2[currentQuestion].option2}</button><br></br>
                <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank2[currentQuestion].option3}</button><br></br>
                <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank2[currentQuestion].option4}</button><br></br>



            </div>

            <div class="grid">
                <button id="submit" class="back-dashboard submit" onClick={submitQuiz} disabled={currentQuestion !== questionbank2.length - 1}>Submit</button>
                <button class="back-dashboard next" id="amnext-btn" onClick={nextQuestion} disabled={currentQuestion === questionbank2.length - 1}>Next</button>

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

export default Amtest