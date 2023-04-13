import React from 'react';
import { Routes , Route,  BrowserRouter } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import TutorialPage from './pages/tutorial';
import TutorialbPage from './pages/tutorialb';
import TutorialcPage from './pages/tutorialc';
import TutorialdPage from './pages/tutoriald';
import TutorialePage from './pages/tutoriale';
import QuestionairePage from './pages/questionaire';
import QuestionairebPage from './pages/questionaireb';
import QuestionairecPage from './pages/questionairec';
import QuestionairedPage from './pages/questionaired';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='login' element={ <LoginPage />} />
      <Route path='signup' element={ <SignupPage />} />
      <Route path='tutorial' element={ <TutorialPage />} />
      <Route path='tutorialb' element={ <TutorialbPage />} />
      <Route path='tutorialc' element={ <TutorialcPage />} />
      <Route path='tutoriald' element={ <TutorialdPage />} />
      <Route path='tutoriale' element={ <TutorialePage />} />
      <Route path='questionaire' element={ <QuestionairePage />} />
      <Route path='questionaireb' element={ <QuestionairebPage />} />
      <Route path='questionairec' element={ <QuestionairecPage />} />
      <Route path='questionaired' element={ <QuestionairedPage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Application;
