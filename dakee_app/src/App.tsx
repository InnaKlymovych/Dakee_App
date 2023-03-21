import React from 'react';
import { Routes , Route, Router, BrowserRouter } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import TutorialPage from './pages/tutorial';
import QuestionairePage from './pages/questionaire';


export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='login' element={ <LoginPage />} />
      <Route path='signup' element={ <SignupPage />} />
      <Route path='tutorial' element={ <TutorialPage />} />
      <Route path='questionaire' element={ <QuestionairePage />} />
    </Routes>
  </BrowserRouter>
  );
};

export default Application;
