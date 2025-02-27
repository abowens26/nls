import React, {useEffect, useState}from "react";
import Header from "../Components/Header";
import './sstest.css'
import questionbank from "../Components/Assets/questionbank";



function Sstest() {
    const [checked, setChecked] = useState(undefined)
const question = questionbank[0];

    useEffect(() => {
        console.log(question)

    })

    function onSelect(){
        console.log("Radio button change")
    }

    const[currentQuestion, setCurrentQuestion] = useState(0)
    const[optionChosen, setOptionChosen] = useState("")

   

    
    return(
        <div>
         <Header />
        <button class="back-dashboard" onClick={() => window.location.href = "/Dashboard"}>Back to Dashboard</button>

         <h3>Social Skills Test</h3>
         <div class="question">
            <p>{questionbank[currentQuestion].question}</p>
            <input
            onClick={() => setOptionChosen("A")} 
            type="radio" 
            id="words" 
            value={questionbank[currentQuestion].option1} 
            name="communicate"></input>
         <label for="words">{questionbank[currentQuestion].option1}</label><br></br>

         <input 
            onClick={() => setOptionChosen("B")} 
            type="radio" 
            id="words" 
            value={questionbank[currentQuestion].option2} 
            name="communicate"></input>
         <label for="words">{questionbank[currentQuestion].option2}</label><br></br>


         <input type="radio" 
            id="words" 
            value={questionbank[currentQuestion].option3} 
            name="communicate"></input>
         <label for="words">{questionbank[currentQuestion].option3}</label><br></br>
         <input type="radio" 
            id="words" 
            value={questionbank[currentQuestion].option4} 
            name="communicate"></input>
         <label for="words">{questionbank[currentQuestion].option4}</label><br></br>
         
         

         </div>

         <div class="grid">
             <button class="back-dashboard question">Previous</button>
             <button class="back-dashboard question">Next</button>
           

         </div>






        </div>
    )
}

export default Sstest