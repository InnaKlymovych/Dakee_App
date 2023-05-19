import React from 'react';
import { Routes , Route,  BrowserRouter } from 'react-router-dom'
import './App.css';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import LoginbPage from './pages/loginb';
import SignupPage from './pages/signup';
import TutorialPage from './pages/tutorial';
import TutorialbPage from './pages/tutorialb';
import TutorialcPage from './pages/tutorialc';
import TutorialdPage from './pages/tutoriald';
import TutorialePage from './pages/tutoriale';
import QuestionairebPage from './pages/questionaireb';
import QuestionairecPage from './pages/questionairec';
import QuestionairedPage from './pages/questionaired';
import QuestionaireePage from './pages/questionairee';
import QuestionairefPage from './pages/questionairef';
import LocalPage from './pages/localsPage';
import LocalSearch from './pages/localSearch';
import Filter from './pages/filter';
import Menu from './pages/menu';
import Chat from './pages/chat';
import ChatMessages from './pages/chat_messages';
import FriendProfile from './pages/friend_profile';
import Profile from './pages/profile';
import Profileb from './pages/profileb';
import Profilec from './pages/profilec';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='login' element={ <LoginPage />} />
      <Route path='loginb' element={ <LoginbPage />} />
      <Route path='signup' element={ <SignupPage />} />
      <Route path='tutorial' element={ <TutorialPage />} />
      <Route path='tutorialb' element={ <TutorialbPage />} />
      <Route path='tutorialc' element={ <TutorialcPage />} />
      <Route path='tutoriald' element={ <TutorialdPage />} />
      <Route path='tutoriale' element={ <TutorialePage />} />
      <Route path='questionaireb' element={ <QuestionairebPage />} />
      <Route path='questionairec' element={ <QuestionairecPage />} />
      <Route path='questionaired' element={ <QuestionairedPage />} />
      <Route path='questionairee' element={ <QuestionaireePage />} />
      <Route path='questionairef' element={ <QuestionairefPage />} />
      <Route path='localsPage' element={ <LocalPage />} />
      <Route path='localSearch' element={ <LocalSearch />} />
      <Route path='filter' element={ <Filter />} />
      <Route path='menu' element={ <Menu />} />
      <Route path='chat' element={ <Chat />} />
      <Route path='chat_messages' element={ <ChatMessages />} />
      <Route path='friend_profile' element={ <FriendProfile />} />
      <Route path='profile' element={ <Profile />} />  
      <Route path='profileb' element={ <Profileb />} /> 
      <Route path='profilec' element={ <Profilec />} /> 
    </Routes>
  </BrowserRouter>
  );
};

export default Application;
