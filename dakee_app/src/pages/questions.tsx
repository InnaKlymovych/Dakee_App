import React, { useState, useEffect } from "react";
import StepsHeader from "../components/steps_header";
import QuestionA from "../steps/questiona";
import QuestionB from "../steps/questionb";
import QuestionC from "../steps/questionc";
import QuestionD from "../steps/questiond";
import QuestionE from "../steps/questione";

interface User {
  // Define the properties of the user object
  cityAdvices: string[];
  id: number;
  age: string;
  gender: string;
  currentCity: string;
  travelPrefs: string[];
}

export interface IQuestionsPageProps {}
const simble = ">";

const Questions: React.FunctionComponent<IQuestionsPageProps> = (props) => {
  //DATA LOGIC
  const queryParams = new URLSearchParams(window.location.search);
  const encodedData = queryParams.get("data");

  if (!encodedData) {
    window.location.href = "/signup";
  }
  const userID = JSON.parse(decodeURIComponent(encodedData || "")).id;

  let [currentStep, setStep] = useState(0);

  let [userModel] = useState<User>(() => ({
    id: userID,
    age: "",
    gender: "",
    currentCity: "",
    cityAdvices: [],
    travelPrefs: [],
  }));

  const setCities = () => {
    const currentCity = document.querySelector<HTMLInputElement>("#current-city-input");
    if (currentCity) {
      userModel.currentCity = currentCity.value;
    }
    userModel.cityAdvices = [];
    const citiesContainer = document.querySelector<HTMLElement>(".inputs-container");
    if (citiesContainer) {
      const advicesInput = Array.from(citiesContainer.children);
      advicesInput.forEach((input: any) => {
        if (input.value) userModel.cityAdvices.push(input.value);
      });
    }
  };
  const udpateUser = async () => {
    const userData = {
      id: userModel.id,
      age: userModel.age,
      gender: userModel.gender,
      currentCity: userModel.currentCity,
      cityAdvices: userModel.cityAdvices.join("|"),
      travelPrefs: userModel.travelPrefs.join("|"),
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const req = await fetch(
      `http://localhost:3001/update_user/${userModel.id}`,
      requestOptions
    );
    await req.json();
  };
  const stepData = {
    currentStep: currentStep,
    stepForward: async () => {
      if (currentStep === 2) {
        setCities();
      }
      setStep((previousStep) => previousStep + 1);
    },
    stepBackwards: () => {
      setStep((previousStep) => previousStep - 1);
    },
    handleAge: (age: any) => {
      userModel.age = age;
      stepData.stepForward();
    },
    handleGender: (gender: any) => {
      userModel.gender = gender;
      stepData.stepForward();
    },
    handleTravelPrefs: async (prefs: string[]) => {
      userModel.travelPrefs = prefs;
      await udpateUser();
      stepData.stepForward();
    },
    handleStart: () => {
      window.location.href = "/localSearch";
    },
  };
  return (
    <div id="questions-container">
      <StepsHeader props={stepData}></StepsHeader>
      <h2 style={{ display: currentStep === 4 ? "none" : "block" }}>
        {currentStep + 1}/4
      </h2>
      <div className="steps-container">
        <QuestionA data={stepData}></QuestionA>
        <QuestionB data={stepData}></QuestionB>
        <QuestionC data={stepData}></QuestionC>
        <QuestionD data={stepData}></QuestionD>
        <QuestionE data={stepData}></QuestionE>
      </div>
      <button
        className="next-button"
        onClick={stepData.stepForward}
        style={{ display: currentStep > 2 ? "none" : "block" }}
      >
        Next {simble}
      </button>
    </div>
  );
};

export default Questions;
