import React from "react";

const Result = (props) => {
  return (
    <div>
      <h2 className="display-1 mg-5 text-center mb-5">
        Quiz ended! Congratulations for getting {props.correctAnswers} out of{" "}
        {props.questionCount} correctly!
      </h2>
    </div>
  );
};

export default Result;
