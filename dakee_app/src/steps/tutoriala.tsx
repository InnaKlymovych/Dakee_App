import React from "react";
import friends from "../images/icons/user-friends.svg";

export interface ITutorialaPageProps {
  data: any;
}

const TutorialaPage: React.FunctionComponent<ITutorialaPageProps> = (props) => {
  return (
    <div
      className="tutorial-step"
      id="tutorial_a"
      style={{ display: props.data.currentStep === 0 ? "flex" : "none" }}
    >
      <h2>
        Hi, {props.data.userName}! <br /> Here´s a short tutorial for you:
      </h2>
      <img src={friends} alt="friends" className="friends" />
      <p>
        Dakee was created to give the real, non-touristic experience in a visited city.
        <br />
        <br />
        Based on your interests, we connect Travellers and Locals to exchange ideas and
        give tips on what is actually worth to do and see. No tourist cliché!
      </p>
    </div>
  );
};

export default TutorialaPage;
