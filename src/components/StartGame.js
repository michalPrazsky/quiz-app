import React from "react";

import { categories } from "../resources/Categories";

const StartGame = (props) => {
  const startQuiz = () => {
    let inputNumOfQuestions = document.getElementById("noQuestions").value;
    let inputCategoryId = document.getElementById("categories").value
    let numOfQuestions = parseInt(inputNumOfQuestions);
    if (numOfQuestions > 0 && inputCategoryId>8 && inputCategoryId<33) {
      props.setNumOfQuestions(numOfQuestions);
      props.setCategory(inputCategoryId)
    }
  };
  return (
    <div className="d-flex flex-column">
      <h2 className="text-center display-1 mg-5 mb-5">Welcome to Quiz App! </h2>
      <label htmlFor="noQuestions" className="text-center text-white mb-3 h2">
        Please select number of questions:
      </label>
      <input
        className="form-control mb-3"
        type="number"
        id="noQuestions"
        name="noQuestions"
        min="10"
        max="25"
        placeholder="min-10 max-25"
      ></input>
      <label htmlFor="categories" className="text-center text-white mb-3 h2">
        Please select question category:
      </label>
      <select className="form-select mb-4" id="categories" name="categories">
        {categories.map((category) => (
          <option key={category.name} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button
        className="btn btn-danger btn-lg text-white mx-5"
        onClick={startQuiz}
      >
        Start Game!
      </button>
    </div>
  );
};

export default StartGame;
