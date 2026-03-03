import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function () {
  const [answersValue, setAnswersValue] = useState([]);

  const activeQuestionIndex = answersValue.length;

  const quizComplete = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswerw,
  ) {
    setAnswersValue((prevAnswerValue) => {
      return [...prevAnswerValue, selectedAnswerw];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="quiz complete" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const shuffledAnswer = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswer.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswer.map((answer) => (
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
