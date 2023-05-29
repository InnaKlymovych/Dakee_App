import React from "react";
import party from "../images/icons/party_icon.svg";
import sightseeing from "../images/icons/sightseeing_icon.svg";
import art from "../images/icons/art_icon.svg";
import history from "../images/icons/history_icon.svg";
import music from "../images/icons/music_icon.svg";
import sports from "../images/icons/sports_icon.svg";
import adventure from "../images/icons/adventure_icon.svg";
import spiritual from "../images/icons/spiritual_icon.svg";
import nature from "../images/icons/nature_icon.svg";
import food from "../images/icons/food_icon.svg";

export interface IQuestionDPageProps {
  data: any;
}

const QuestionD: React.FunctionComponent<IQuestionDPageProps> = (props) => {
  let prefs: string[] = [];

  const addRemovePref = (pref: string, target: any) => {
    if (pref === "done") {
      props.data.handleTravelPrefs(prefs);
      return;
    }
    let isRemove = prefs.find((p) => p === pref);

    if (isRemove) {
      target.className = "buttons_text";
      prefs = prefs.filter((p) => p !== pref);
    } else {
      target.className = "buttons_text selected";
      prefs.push(pref);
    }
  };
  return (
    <div
      id="questiond"
      className="question-step"
      style={{ display: props.data.currentStep === 3 ? "flex" : "none" }}
    >
      <p>Travel experiences preferences:</p>
      <div className="question-buttons">
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("party", e.target)}
        >
          <img src={party} alt="party" />
        </button>
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("sightseeing", e.target)}
        >
          <img src={sightseeing} alt="sightseeing" />
        </button>
        <button className="buttons_text" onClick={(e) => addRemovePref("art", e.target)}>
          <img src={art} alt="art" />
        </button>
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("history", e.target)}
        >
          <img src={history} alt="history" />
        </button>
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("music", e.target)}
        >
          <img src={music} alt="music" />
        </button>
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("sports", e.target)}
        >
          <img src={sports} alt="sports" />
        </button>
        <button
          className="buttons_text"
          onClick={(e: any) => addRemovePref("adventure", e.target)}
        >
          <img src={adventure} alt="adventure" />
        </button>
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("spiritual", e.target)}
        >
          <img src={spiritual} alt="spiritual" />
        </button>
        <button
          className="buttons_text"
          onClick={(e) => addRemovePref("nature", e.target)}
        >
          <img src={nature} alt="nature" />
        </button>
        <button className="buttons_text" onClick={(e) => addRemovePref("food", e.target)}>
          <img src={food} alt="food" />
        </button>
        <button onClick={() => addRemovePref("done", null)}>Done</button>
      </div>
    </div>
  );
};

export default QuestionD;
