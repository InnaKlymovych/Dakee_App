import React from "react";

export interface ITutorialePageProps {
  callback: any;
  data: any;
}

const TutorialePage: React.FunctionComponent<ITutorialePageProps> = ({
  data,
  callback,
}) => {
  return (
    <div
      className="tutorial-step"
      id="tutorial_d"
      style={{ display: data.currentStep === 4 ? "flex" : "none" }}
    >
      <h2>
        Done!,
        <br />
        Let us ask five quick questions before we start.
      </h2>
      <p>You can edit your anwsers later.</p>

      <button className="done" onClick={callback}>
        Ok
      </button>
    </div>
  );
};

export default TutorialePage;
