import React from "react";

const QuestionReset = (props) => {
  const handleNewGame = () => {
    props.setCurrentQuestion(0);
    props.setScore(0);
    props.setNumOfQuestions(0);
    props.setQuestion([])
  };

  return (
    <button
      onClick={handleNewGame}
      className="btn btn-danger btn-lg text-white mx-5"
    >
      Start New Game!
    </button>
  );
};

export default QuestionReset;
