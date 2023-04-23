import React from "react";
import { useState, useEffect } from "react";

import QuestionHeader from "./components/QuestionHeader";
import Question from "./components/Question";
import Result from "./components/Result";
import QuestionReset from "./components/QuestionReset";
import StartGame from "./components/StartGame";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [question, setQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [msg, setMsg] = useState("");
  const [numOfQuestions, setNumOfQuestions] = useState(0);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}`
        );
        const data = await response.json();
        setQuestion(data.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    if (currentQuestion === 0 && numOfQuestions > 0) {
      fetchData();
    }
  }, [currentQuestion, numOfQuestions,category]);

  const handleQuestions = (answer) => {
    if (answer === question[currentQuestion].correct_answer) {
      setScore(score + 1);
      setMsg("Correct!");
    } else {
      setMsg("Wrong!");
    }
    setTimeout(() => {
      setMsg(false);
      setCurrentQuestion(currentQuestion + 1);
    }, 500);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="container mt-4 border border-dark rounded-lg p-5 bg-secondary"
        style={{ borderRadius: "3.5rem" }}
      >
        {isLoading ? (
          <h2 className="d-flex justify-content-center display-1 mg-5">
            Quiz is loading!
          </h2>
        ) : question.length > 0 ? (
          currentQuestion >= question.length ? (
            <div className="d-flex flex-column display-1 mg-5">
              <Result correctAnswers={score} questionCount={question.length} />
              <QuestionReset
                setCurrentQuestion={setCurrentQuestion}
                setScore={setScore}
                setNumOfQuestions={setNumOfQuestions}
                setQuestion={setQuestion}
              />
            </div>
          ) : (
            <div>
              <QuestionHeader
                currentQuestion={currentQuestion}
                totalQuestions={question.length}
                score={score}
                msg={msg}
              />
              <Question
                correct_answer={question[currentQuestion].correct_answer}
                incorrect_answers={question[currentQuestion].incorrect_answers}
                question={question[currentQuestion].question}
                handleQuestions={handleQuestions}
              />
            </div>
          )
        ) : (
          <StartGame
            setNumOfQuestions={setNumOfQuestions}
            setCategory={setCategory}
          />
        )}
      </div>
    </div>
  );
}

export default App;
