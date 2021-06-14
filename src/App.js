import React, { useState,useEffect } from "react";
export default function App() {
	
  const [questions,setQuestions] = useState([{
	questionText: "Let's begin shortly",
	negation: false,
	answerOptions: [],
  loader: true,
  }]); 
  //component did mount
  
  useEffect(() => {
    setQuestions([{questionText: "In what year were the first Air Jordan sneakers released?",answerOptions: [{answerText: "1984",verdict:true},{answerText: "1934",verdict:false},
    {answerText: "1974",verdict:false},{answerText: "1994",verdict:false}]},
    {questionText: "Samuel Tilden, Grover Cleveland, Al Gore, and Hillary Clinton share what distinction among U.S. presidential candidates?",answerOptions: [{answerText: "They won the popular vote but lost the electoral college vote",verdict:true},{answerText: "All are women.",verdict:false},{answerText: "All hate trump.",verdict:false},{answerText: "All arebill Bill Clinton's lovers",verdict:false}]},
    {questionText: "Which African country was formerly known as Abyssinia?",answerOptions: [{answerText: "Ethiopia",verdict:true},{answerText: "Nigeria",verdict:false},{answerText: "Uganda",verdict:false},{answerText: "Chile",verdict:false}]},{questionText: "In what year were the first Air Jordan sneakers released?",answerOptions: [{answerText: "1984",verdict:true},{answerText: "1934",verdict:false},{answerText: "1974",verdict:false},{answerText: "1994",verdict:false}]}])
  }, []);




  const [displayedQuestion, changeDisplayedQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [ans,setAns] = useState([]);


  
  const handleScreenState = (idx) => {

    setAns([...ans,idx])

    if (displayedQuestion + 1 < questions.length) {
      changeDisplayedQuestion(displayedQuestion + 1);
    } else {
      setTestOver(true);
      console.log(ans)
    }
    
  };

  return (
    //following Bem convention
    <div className="app">
      {testOver ? (

        <div className="scoredCard">
          Score Board
          <br/>

          {questions.map((question,idx)=>
          (<>
          <div className="scoreCard__segment container" key = {idx}>
          <div className="scoreCard__questionSection">
            <div className="scoreCard__questionCount">
              <span>Question {idx + 1}</span> of{" "}
              {questions.length}
            </div>
            <div className="scoreCard__questionText">
              {questions[idx].questionText}
            </div>
          </div>
          <div className="scoreCard__answerSection">
            {questions[idx].answerOptions.map((answerOption,optionNumber) => (
              <button className={`${answerOption.verdict ? 'correct' : `${optionNumber===ans[idx]?'incorrect':''}`}`} key = {optionNumber}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
          </div>
        </>)
          )}


        </div>


      ) : (
        <>
          <div className="questionSection">
            <div className="questionCount">
              {(!questions[displayedQuestion].loader)?(<><span>Question {displayedQuestion + 1}</span> of {questions.length}</>):(<div class="loader"></div>)}
              
            </div>
            <div className="questionText">
              {questions[displayedQuestion].questionText}
            </div>
          </div>
          <div className="answerSection">
            {questions[displayedQuestion].answerOptions?(questions[displayedQuestion].answerOptions.map((answerOption,idx) => (
              <button
                onClick={() =>
                  handleScreenState(
                    idx
                  )
                }
                 key = {idx}
              >
                {answerOption.answerText}
              </button>
            ))):(<></>)}
          </div>
        </>
      )}
    </div>
  );
}
