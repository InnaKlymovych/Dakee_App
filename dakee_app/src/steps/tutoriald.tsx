import happy from "../images/icons/happy_icon.svg";
export interface ITutorialdPageProps {
  callback: any;
  data: any;
}

const TutorialdPage: React.FunctionComponent<ITutorialdPageProps> = ({
  data,
  callback,
}) => {
  return (
    <div
      className="tutorial-step"
      id="tutorial_d"
      style={{ display: data.currentStep === 3 ? "flex" : "none" }}
    >
      <h2>
        Congrats,
        <br />
        you´re both!
      </h2>
      <img src={happy} alt="happy_face" />
      <p>
        As a Dakee user, you can choose to be both Traveller and Local.
        <br />
        <br />
        Gain discounts by giving advices to visitors and get the unforgettable local
        experience while travelling!
      </p>
      <button className="done" onClick={callback}>
        Done
      </button>
    </div>
  );
};

export default TutorialdPage;
