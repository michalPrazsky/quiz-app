import React from "react";

import he from "he";

const Question = (props) => {
  const randomNum = (a, b) => {
    return Math.random() - 0.5;
  };

  const sortedAnswers = [props.correct_answer, ...props.incorrect_answers].sort(
    randomNum
  );

  return (
    <div className="text-center">
      <h2 className="d-flex justify-content-center display-3 pb-5 text-white">
        {he.decode(props.question)}
      </h2>
      <div className="d-flex justify-content-center">
        {sortedAnswers.map((answer) => (
          <button
            className="btn btn-danger btn-lg mx-1 text-white"
            key={answer}
            onClick={() => props.handleQuestions(answer)}
          >
            {he.decode(answer)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
