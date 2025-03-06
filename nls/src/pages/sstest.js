import React, {useEffect, useState}from "react";
import Header from "../Components/Header";
import './sstest.css'
import questionbank from "../Components/Assets/questionbank";



function Sstest() {

const [score, setScore] = useState(0)
 const finalScore = (score / questionbank.length) * 100


    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[optionChosen, setOptionChosen] = useState("")

    const positiveAffirmation = ["Great Job!", "Keep Going!", "Better Luck Next Time!", "Keep working you got this!", ":("]

    const nextQuestion = () => {

        if(questionbank[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }
   

    const submitQuiz = () => {
        let newScore=score;
        
        if(questionbank[currentQuestion].Answer === optionChosen) {
            newScore = score + 1
            setScore(newScore);    
        } 

        const finalScore = (newScore/ questionbank.length) * 100

        sessionStorage.setItem("finalScore", finalScore) 
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
             <h3 class="test-title">Social Skills Test</h3> 
         </div>
       

        
         <div class="question">
            <p id="question">{questionbank[currentQuestion].question}</p>
         <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank[currentQuestion].option1}</button><br></br>
         <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank[currentQuestion].option2}</button><br></br>
         <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank[currentQuestion].option3}</button><br></br>
         <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank[currentQuestion].option4}</button><br></br>
         
         

         </div>

         <div class="grid">
             <button id="submit" class="back-dashboard submit" onClick={submitQuiz} disabled={currentQuestion !== questionbank.length -1}>Submit</button>
             <button class="back-dashboard next" onClick={nextQuestion} disabled={currentQuestion === questionbank.length -1}>Next</button>

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

export default Sstest