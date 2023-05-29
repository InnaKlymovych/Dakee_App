import React from "react";
import plane from "../images/icons/plane_icon.svg";

export interface ITutorialbPageProps {
  data: any;
}

const TutorialbPage: React.FunctionComponent<ITutorialbPageProps> = (props) => {
  return (
    <div
      className="tutorial-step"
      id="tutorial_b"
      style={{ display: props.data.currentStep === 1 ? "flex" : "none" }}
    >
      <h2>
        Who is <br /> a traveller?
      </h2>
      <img src={plane} className="plane" alt="plane" />
      <p>
        A Traveller looks for a matching Local personto get tips via chat on what to see,
        visit or do in a specific city.
        <br />
        <br />
        He or she can later give the avaliations for the tips given.
      </p>
    </div>
  );
};
export default TutorialbPage;
