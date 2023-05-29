import React, { useState } from "react";
import TutorialbPage from "../steps/tutorialb";
import TutorialcPage from "../steps/tutorialc";
import TutorialdPage from "../steps/tutoriald";
import TutorialePage from "../steps/tutoriale";
import TutorialaPage from "../steps/tutoriala";
import ellipse1 from "../images/icons/Ellipse 1.png";
import ellipse2 from "../images/icons/Ellipse 2.png";
import StepsHeader from "../components/steps_header";

export interface ITutorialPageProps {}

const TutorialPage: React.FunctionComponent<ITutorialPageProps> = (props) => {
  //DATA LOGIC
  const queryParams = new URLSearchParams(window.location.search);
  const encodedData = queryParams.get("data");

  if (!encodedData) {
    window.location.href = "/signup";
  }
  const userData = JSON.parse(decodeURIComponent(encodedData || ""));

  //STEPS LOGIC
  let [currentStep, setStep] = useState(0);
  const stepData = {
    userName: userData.name,
    currentStep: currentStep,
    stepForward: () => {
      if (currentStep > 2) return;
      setStep((previousStep) => previousStep + 1);
    },
    stepBackwards: () => {
      setStep((previousStep) => previousStep - 1);
    },
  };

  const handleStep3 = () => {
    setStep((previousStep) => previousStep + 1);
  };
  const handleStep4 = () => {
    const encodedData = encodeURIComponent(
      JSON.stringify({ id: userData.id.toString() })
    );
    console.log(encodedData);
    window.location.href = `/questions?data=${encodedData}`;
  };
  const handleSkipTutorial = () => {
    setStep(4);
  };

  return (
    <div id="tutorial-container">
      <StepsHeader props={stepData}></StepsHeader>

      <div className="steps-container" onClick={stepData.stepForward}>
        <TutorialaPage data={stepData}></TutorialaPage>
        <TutorialbPage data={stepData}></TutorialbPage>
        <TutorialcPage data={stepData}></TutorialcPage>
        <TutorialdPage data={stepData} callback={handleStep3}></TutorialdPage>
        <TutorialePage data={stepData} callback={handleStep4}></TutorialePage>
      </div>

      <footer>
        <div
          className="ellipse"
          style={{ visibility: currentStep === 4 ? "hidden" : "visible" }}
        >
          <img src={currentStep === 0 ? ellipse1 : ellipse2} alt="ellipse1" />
          <img src={currentStep === 1 ? ellipse1 : ellipse2} alt="ellipse2" />
          <img src={currentStep === 2 ? ellipse1 : ellipse2} alt="ellipse2" />
          <img src={currentStep === 3 ? ellipse1 : ellipse2} alt="ellipse2" />
        </div>
        <button
          className="skip-tutorial"
          style={{ visibility: currentStep > 2 ? "hidden" : "visible" }}
          onClick={handleSkipTutorial}
        >
          Skip the tutorial
        </button>
      </footer>
    </div>
  );
};

export default TutorialPage;
