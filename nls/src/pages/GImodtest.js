import React, {use, useEffect, useState}from "react";
import Header from "../Components/Header";
import './GImodtest.css'
import questionbank3 from "../Components/Assets/questionbank3";
import supabase from "../helper/supabaseClient";


function GImodTest() {
const testname = "G.R.O.U.P Introduction"
const [score, setScore] = useState(0)
const finalScore = (score / questionbank3.length) * 100
const roundedScore = Math.round(finalScore * 10) / 10
const[email, setEmail] = useState("")

useEffect(() => {
    const fetchUser = async () => {
        const {data} = await supabase.auth.getUser();
        if(data?.user) {
            setEmail(data.user.email);
        }
    };
    fetchUser();
})

    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[optionChosen, setOptionChosen] = useState("")
   

const Giheader = [" G.R.O.U.P Introduction Presentation", "G.R.O.U.P Introduction Quiz"]

const positiveAffirmation = ["Great Job!", "Keep Going!", "Better Luck Next Time!", "Keep working you got this!", ":("]


const startModule = () => {
        document.getElementById("mod-title").hidden = true;
        document.getElementById("t-title").innerHTML = Giheader[0];
        document.getElementById("start").hidden = true;
        document.getElementById("ppt").style.display="block";
        document.getElementById("startquiz").style.display="block"
        document.getElementById("content").innerHTML = "Go through the slides and start quiz when you are ready!!";
      
    }

   

    const startQuiz = () => {
        document.getElementById("q-container").style.display="block"
        document.getElementById("content").style.display="none"
        document.getElementById("mod-btns").style.display="none"
        document.getElementById("t-title").innerHTML = Giheader[1];
        document.getElementById("startquiz").style.display = "none";
        document.getElementById("next-btn").style.display = "block"


    }



    const nextQuestion = () => {

        if(questionbank3[currentQuestion].Answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrentQuestion(currentQuestion + 1);
    }


    const submitQuiz = async () => {

        let newtestScore=score;


        if(questionbank3[currentQuestion].Answer === optionChosen) {
            newtestScore = score + 1
            setScore(newtestScore);
        }

        const finalScore = (newtestScore / questionbank3.length) * 100
        const roundedScore = Math.round(finalScore * 10) / 10

       sessionStorage.setItem("GifinalScore", (roundedScore)); 
        document.getElementById("submit").hidden = true;
        document.getElementById("option1").hidden = true;
        document.getElementById("option2").hidden = true;
        document.getElementById("option3").hidden = true;
        document.getElementById("option4").hidden = true;
        document.getElementById("question").hidden = true;
        document.getElementById("box-score").classList.toggle("show");
        document.getElementById("next-btn").style.display = "none";
        document.getElementById("back").style.display = "none";
        document.getElementById("t-title").style.display = "none";
    
        
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

    }





    
   

    
    return(
        <div>
         <Header />        
         <button class="back-dashboard back" id="back" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>
      
         <div class="test-title"> 
            <h1 id="mod-title">Welcome to the G.R.O.U.P Introduction Module!</h1>
             <h3 class="t-title" id="t-title"></h3> 
            
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
        
         <div class="question" id="q-container" >
            <p id="question">{questionbank3[currentQuestion].question}</p>
         <button id="option1" class="back-dashboard option" onClick={() => setOptionChosen("A")} >{questionbank3[currentQuestion].option1}</button><br></br>
         <button id="option2" class="back-dashboard option" onClick={() => setOptionChosen("B")} >{questionbank3[currentQuestion].option2}</button><br></br>
         <button id="option3" class="back-dashboard option" onClick={() => setOptionChosen("C")} >{questionbank3[currentQuestion].option3}</button><br></br>
         <button id="option4" class="back-dashboard option" onClick={() => setOptionChosen("D")} >{questionbank3[currentQuestion].option4}</button><br></br>
         
         

         </div>

         <div class="grid"> 
             <button id="submit" class="back-dashboard submit" onClick={submitQuiz} disabled={currentQuestion !== questionbank3.length -1}>Submit</button>
             <button class="back-dashboard next" id="next-btn" onClick={nextQuestion} disabled={currentQuestion === questionbank3.length -1}>Next</button>

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

export default GImodTest