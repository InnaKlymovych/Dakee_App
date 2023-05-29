import React from "react";

export interface IQuestionEPageProps {
  data: any;
}

const QuestionE: React.FunctionComponent<IQuestionEPageProps> = (props) => {
  return (
    <div
      id="questione"
      className="question-step"
      style={{ display: props.data.currentStep === 4 ? "flex" : "none" }}
    >
      <h2>
        Perfect!<br></br>Lets start!
      </h2>

      <button className="buttons_text" onClick={() => props.data.handleStart()}>
        OK
      </button>
    </div>
  );
};

export default QuestionE;
