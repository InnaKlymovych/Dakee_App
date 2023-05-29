import React from "react";

export interface IQuestionAPageProps {
  data: any;
}
const simble = ">";
const simble2 = "<";

const QuestionA: React.FunctionComponent<IQuestionAPageProps> = (props) => {
  return (
    <div
      id="questiona"
      className="question-step"
      style={{ display: props.data.currentStep === 0 ? "flex" : "none" }}
    >
      <p>Age:</p>
      <div className="question-buttons">
        <button className="buttons_text" onClick={() => props.data.handleAge("<20")}>
          {simble2}20
        </button>
        <button className="buttons_text" onClick={() => props.data.handleAge("21-39")}>
          21-39
        </button>
        <button className="buttons_text" onClick={() => props.data.handleAge("40-59")}>
          40-59
        </button>
        <button className="buttons_text" onClick={() => props.data.handleAge("60+")}>
          60+
        </button>
      </div>
    </div>
  );
};

export default QuestionA;
