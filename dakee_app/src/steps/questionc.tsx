import React from "react";
import CityQuestionForm from "../components/city_question_form";

export interface IQuestionCPageProps {
  data: any;
}

const QuestionC: React.FunctionComponent<IQuestionCPageProps> = (props) => {
  return (
    <div
      id="questionc"
      className="question-step"
      style={{ display: props.data.currentStep === 2 ? "flex" : "none" }}
    >
      <CityQuestionForm data={""}></CityQuestionForm>
    </div>
  );
};

export default QuestionC;
