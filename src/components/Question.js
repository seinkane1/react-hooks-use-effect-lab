import React, { useState } from "react";
import questions from "../data/quiz";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10); 
      onAnswered(false); 
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <p>Time Remaining: {timeRemaining}</p>
    
    </div>
  );
};

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = Question;



    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  ;


export default Question;
