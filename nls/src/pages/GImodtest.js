import React, {use, useEffect, useState}from "react";
import Header from "../Components/Header";
import './GImodtest.css'
import questionbank2 from "../Components/Assets/questionbank2";



function GImodTest() {

const [score, setScore] = useState(0)
const finalScore = (score / questionbank2.length) * 100


    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[optionChosen, setOptionChosen] = useState("")
    const[currentModule,setCurrentModdule] = useState(0)
    const[currentHeader, setCurrentHeader] = useState(0);

const Giheader = ["Objective", "G.R.O.U.P Stands For", "G - Get Along with Others", "R - Respect Everyone", "O - On Task Behavior", "U - Use Quiet Voices", "P - Participate Actively", " G.R.O.U.P Introduction"]
const GImod = ["Clients will identify up to three concrete behaviors that align with group expectations using the G.R.O.U.P. acronym.", "Get Along, Respect Others, On Task Behavior, Use Quiet Voices, Particpate Actively", "Use kind and respectful words", "Use appropriate language and tone.", "Stay focused and Engaged on the task", "Speak up if you need help or clarification", "Share thoughts and experiences when comfortable. Also, Stay Engaged!", "You are now ready for the test!"]
const positiveAffirmation = ["Great Job!", "Keep Going!", "Better Luck Next Time!", "Keep working you got this!", ":("]

    

    const startModule = () => {
        document.getElementById("mod-title").hidden = true;
        document.getElementById("title").innerHTML = Giheader[0];
        document.getElementById("content").innerHTML = GImod[0];
        document.getElementById("start").hidden = true;
        document.getElementById("next").style.display="block"
    }

    const nextModule = () => {
        setCurrentHeader(currentHeader + 1);
        setCurrentModdule(currentModule + 1);
        document.getElementById("title").innerHTML = Giheader[currentHeader]
        document.getElementById("content").innerHTML=GImod[currentModule]

        if(currentHeader === Giheader.length -1) {
            document.getElementById("next").style.display="none"
        }

    }

    const startQuiz = () => {
        document.getElementById("q-container").style.display="block"
        document.getElementById("g-container").style.display="block"
        document.getElementById("content").style.display="none"
        document.getElementById("mod-btns").style.display="none"


    }


    const nextQuestion = () => {

        if(questionbank2[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }


    const submitQuiz = () => {

        let newtestScore=score;


        if(questionbank2[currentQuestion].Answer === optionChosen) {
            newtestScore = score + 1
            setScore(newtestScore);
        }

        const finalScore = (newtestScore/ questionbank2.length) * 100

       sessionStorage.setItem("GifinalScore", (finalScore)); 
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

        
         <div class="test-title"> 
            <h1 id="mod-title">Welcome to the G.R.O.U.P Introduction Module!</h1>
             <h3 class="title" id="title"></h3> 
            
         </div>
         
         <div class="content-container">

        <p id="content"></p>

        </div>

        <div class="start-btn-container" id="mod-btns">
               <button class="back-dashboard" id="start" onClick={startModule}> Start</button>
               <button class="back-dashboard" id="startquiz" onClick={startQuiz} disabled={currentHeader !== Giheader.length}>Start Quiz</button>
               <button class="back-dashboard" id="next" onClick={nextModule} disabled={currentHeader===Giheader.length}>Next</button>
        </div>
        
         <div class="gi-question" id="q-container" >
            <p id="question">{questionbank2[currentQuestion].question}</p>
         <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank2[currentQuestion].option1}</button><br></br>
         <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank2[currentQuestion].option2}</button><br></br>
         <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank2[currentQuestion].option3}</button><br></br>
         <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank2[currentQuestion].option4}</button><br></br>
         
         

         </div>

         <div class="gi-grid" id="g-container"> 
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

export default GImodTest