import { useState } from "react";
import QUESTIONS from "../questions.js";
export default function () {
  const [answersValue, setAnswersValue] = useState([]);

  const activeQuestionIndex = answersValue.length;

  function handleSelectAnswer(selectedAnswerw) {
    setAnswersValue((prevAnswerValue) => {
      return [...prevAnswerValue, selectedAnswerw];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <progress></progress>
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
