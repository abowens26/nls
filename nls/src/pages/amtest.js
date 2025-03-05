import React, {useEffect, useState}from "react";
import Header from "../Components/Header";
import './amtest.css'
import questionbank2 from "../Components/Assets/questionbank2";



function Amtest() {

const [score, setScore] = useState(0)
const finalScore = (score / questionbank2.length) * 100


    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[optionChosen, setOptionChosen] = useState("")

const positiveAffirmation = ["Great Job!", "Keep Going!", "Better Luck Next Time!", "Keep working you got this!", ":("]

    const nextQuestion = () => {

        if(questionbank2[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }


    const submitQuiz = () => {
        if(questionbank2[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
           
        }

       sessionStorage.setItem("Amfinalscore", (finalScore + 20)); 
        document.getElementById("submit").hidden = true;
        document.getElementById("option1").hidden = true;
        document.getElementById("option2").hidden = true;
        document.getElementById("option3").hidden = true;
        document.getElementById("option4").hidden = true;
        document.getElementById("question").hidden = true;
        document.getElementById("box-score").classList.toggle("show");
        
        if(finalScore === 100) {
            document.getElementById("message").innerHTML = positiveAffirmation[0];

        } else if (finalScore === 80) {
            document.getElementById("message").innerHTML = positiveAffirmation[1]
        } else if (finalScore === 60) {
            document.getElementById("message").innerHTML = positiveAffirmation[2]
        } else if (finalScore === 40) {
            document.getElementById("message").innerHTML = positiveAffirmation[3]
        } else if (finalScore < 40) {
            document.getElementById("message").innerHTML = positiveAffirmation[4]
        }

    }





    
   

    
    return(
        <div>
         <Header />
         <div>
             <h3 class="test-title">Anger Management</h3> 
         </div>
       

        
         <div class="question">
            <p id="question">{questionbank2[currentQuestion].question}</p>
         <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank2[currentQuestion].option1}</button><br></br>
         <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank2[currentQuestion].option2}</button><br></br>
         <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank2[currentQuestion].option3}</button><br></br>
         <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank2[currentQuestion].option4}</button><br></br>
         
         

         </div>

         <div class="grid">
             <button id="submit" class="back-dashboard submit" onClick={submitQuiz} disabled={currentQuestion !== questionbank2.length -1}>Submit</button>
             <button class="back-dashboard next" onClick={nextQuestion} disabled={currentQuestion === questionbank2.length -1}>Next</button>

         </div>
         
         <div class="final-score-box" id="box-score">
            <div class="final-score-container">
               <h2 class="final-score">{finalScore}%</h2><br></br>  
            </div>
            <h2 class="final-score-container" id="message"></h2>
           <div class="final-score-container">
            <button class="back-dashboard" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>
           </div>
            
         
         </div>
        






        </div>
    )
}

export default Amtest