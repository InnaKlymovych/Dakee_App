import React from "react";
import vectorUp from "../images/icons/home_icon.svg";

export interface ITutorialcPageProps {
  data: any;
}

const TutorialcPage: React.FunctionComponent<ITutorialcPageProps> = (props) => {
  return (
    <div
      className="tutorial-step"
      id="tutorial_c"
      style={{ display: props.data.currentStep === 2 ? "flex" : "none" }}
    >
      <h2>
        Who is <br /> a Local?
      </h2>
      <img src={vectorUp} alt="vectorUp" />
      <p>
        A Local is a person who lives in a city and wants to give some tips to visitors.
        <br />
        <br />
        He or she recieves later avaliations from the Travellers. Each avaliation has a
        point value that can be exchanges for many rewards and discounts from our
        Partners.
      </p>
    </div>
  );
};

export default TutorialcPage;
