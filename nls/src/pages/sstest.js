import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import questionbank from "../Components/Assets/questionbank";
import supabase from "../helper/supabaseClient";
import { NavLink } from "react-router-dom";

/*Code for Social Skills Module */ 
function Sstest() {
    /**Initilaize test elements */
    const [email, setEmail] = useState("");
    const testname = "Social Skills Test"
    const [score, setScore] = useState(0)
    const finalScore = (score / questionbank.length) * 100
    const roundedScore = Math.round(finalScore * 10) / 10
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
    const progress = (currentQuestion / questionbank.length) * 100;

    const nextQuestion = () => {

        /*Increases the score if user picks correct answer*/
        if(questionbank[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }


        setCurrentQuestion(currentQuestion + 1);
    }


   //Saves test score into database and calcuates test score
    const submitQuiz = async () => {

        let newtestScore=score;


        if(questionbank[currentQuestion].Answer === optionChosen) {
            newtestScore = score + 1
            setScore(newtestScore);
        }

        /*Calculates score percentage based on how well user does */
        const finalScore = (newtestScore / questionbank.length) * 100
        /*Rounds the score to the nearest tenth */
        const roundedScore = Math.round(finalScore * 10) / 10

           /*Insert score into local storage so user can access in dashboard (this is subject to change due to security purposes)  */
       localStorage.setItem("GifinalScore", (roundedScore)); 
           /*Show and hide elements when quiz ends */
        document.getElementById("submit").hidden = true;
        document.getElementById("option1").hidden = true;
        document.getElementById("option2").hidden = true;
        document.getElementById("option3").hidden = true;
        document.getElementById("option4").hidden = true;
        document.getElementById("question").hidden = true;
        document.getElementById("box-score").classList.toggle("show");
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("progress").style.visibility='hidden';
        document.getElementById("quiz-title").style.display="none"
    
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
           setPostiveAffirmation("Never Give Up!")
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

    }





    
   

    
    return(
        <div>
         <Header />        
         <NavLink exact to="/SSMod"> <button class="back-dashboard back" id="back">Back to Module Home</button></NavLink>
      
      <div class="quiz-title" id="quiz-title">
         <h1>Social Skills Quiz</h1>
      </div>
        
        <div class="progress-container" id="progress">
            <progress value={progress} max="100"></progress>
         </div>
         <div class="content-container">

        <p id="content"></p> 
      

        </div>

       
         <div class="question" id="q-container" >
            <p id="question">{questionbank[currentQuestion].question}</p>
         <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank[currentQuestion].option1}</button><br></br>
         <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank[currentQuestion].option2}</button><br></br>
         <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank[currentQuestion].option3}</button><br></br>
         <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank[currentQuestion].option4}</button><br></br>
         
         
        
         </div>

         <div class="grid"> 
             <button id="submit" class="back-dashboard submit" onClick={submitQuiz} disabled={currentQuestion !== questionbank.length -1}>Submit</button>
         <button class="back-dashboard next" id="next-btn" onClick={nextQuestion} disabled={currentQuestion === questionbank.length -1}>Next</button> 
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