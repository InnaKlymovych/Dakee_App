import back from "../images/icons/back.svg";
import logo_small from "../images/logo_small.svg";

export const StepsHeader = (data: any, callback: any) => {
  return (
    <header>
      <button
        className="tutorial_back_button"
        style={{ visibility: data.props.currentStep > 0 ? "visible" : "hidden" }}
        onClick={() => data.props.stepBackwards()}
      >
        <img src={back} alt="back" />
      </button>
      <img src={logo_small} alt="logo" className="logo_small" />
    </header>
  );
};

export default StepsHeader;
