import React, { useState,useEffect } from "react";
export default function App() {
	
  const [questions,setQuestions] = useState([{
	questionText: "Let's Begin!",
	negation: false,
	answerOptions: []
  }]); 
  //component did mount
  
  useEffect(() => {
    async function fetchData(){
      const res = await fetch('https://quizex.herokuapp.com/backend/question')
      const data = await res.json();
      console.log(data)
      setQuestions(data)
     }
     fetchData();
  }, []);

  console.log(questions)

//   useEffect(()=>{
//     async function fetching(){
//       const data = await axios.get('/backend/question').then((response) => {
//         console.log(response.data);
//       }
//       )
//   }
//   fetching();
// })


  const [displayedQuestion, changeDisplayedQuestion] = useState(0);
  const [testOver, setTestOver] = useState(false);
  const [ans,setAns] = useState([]);
  const handleScreenState = (verdict, negation, skip,idx) => {

    if(!skip)
    {setAns([...ans,idx])}
    


    if (skip) {
      if (displayedQuestion + 1 < questions.length) {
        changeDisplayedQuestion(displayedQuestion + 1);
      } else {
        setTestOver(true);
        console.log(ans)
      }
      return;
    }
    // if (verdict) {
    //   changeScore(score + 1);
    

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
           <button>
              Skip
            </button>
          </div>
          </div>
        </>)
          )}


        </div>


      ) : (
        <>
          <div className="questionSection">
            <div className="questionCount">
              <span>Question {displayedQuestion + 1}</span> of{" "}
              {questions.length}
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
                    answerOption.verdict,
                    questions[displayedQuestion].negation,
                    false,
                    idx
                  )
                }
                 key = {idx}
              >
                {answerOption.answerText}
              </button>
            ))):(<></>)}
            {questions.length!==1?(<button onClick={() => handleScreenState(null, null, true,null)}>
              Skip
            </button>):(<></>)}
          </div>
        </>
      )}
    </div>
  );
}
