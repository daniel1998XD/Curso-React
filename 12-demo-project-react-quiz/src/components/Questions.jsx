import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Questions() {
  const [answersValue, setAnswersValue] = useState([]);

  const activeQuestionIndex = answersValue.length;

  const quizComplete = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer,
  ) {
    setAnswersValue((prevAnswerValue) => {
      return [...prevAnswerValue, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer],
  );

  if (quizComplete) {
    return <Summary userAnswers={answersValue} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
