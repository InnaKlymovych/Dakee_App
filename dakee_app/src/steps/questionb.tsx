import React from "react";
import female from "../images/icons/female_icon.svg";
import male from "../images/icons/male_icon.svg";
import unicorn from "../images/icons/unicorn_icon.svg";
import cross from "../images/icons/cross_icon.svg";

export interface IQuestionBPageProps {
  data: any;
}

const QuestionB: React.FunctionComponent<IQuestionBPageProps> = (props) => {
  return (
    <div
      id="questionb"
      className="question-step"
      style={{ display: props.data.currentStep === 1 ? "flex" : "none" }}
    >
      <p>Gender:</p>
      <div className="question-buttons">
        <button
          className="buttons_text"
          onClick={() => props.data.handleGender("female")}
        >
          <img src={female} alt="female" />
        </button>
        <button className="buttons_text" onClick={() => props.data.handleGender("male")}>
          <img src={male} alt="male" />
        </button>
        <button
          className="buttons_text"
          onClick={() => props.data.handleGender("complex")}
        >
          <img src={unicorn} alt="unicorn" />
        </button>
        <button
          className="buttons_text"
          onClick={() => props.data.handleGender("prefer not to say")}
        >
          <img src={cross} alt="cross" />
        </button>
      </div>
    </div>
  );
};

export default QuestionB;
