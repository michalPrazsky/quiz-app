import React from "react";

const QuestionHeader = (props) => {
  return (
    <div>
      <p className="d-flex display-4 text-center text-white justify-content-center">
        {props.msg}
      </p>
      <div className="d-flex justify-content-between">
        <p className="d-inline display-4 pb-4 ">
          Question: {props.currentQuestion + 1}/{props.totalQuestions}
        </p>
        <p className="d-inline display-4 text-right"> Correct: {props.score}</p>
      </div>
    </div>
  );
};

export default QuestionHeader;
