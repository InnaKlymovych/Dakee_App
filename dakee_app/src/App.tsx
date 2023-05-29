import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { LoginbPage } from "./pages/loginb";
import SignupPage from "./pages/signup";
import TutorialPage from "./pages/tutorial";
import QuestionsPage from "./pages/questions";
import LocalPage from "./pages/localsPage";
import LocalSearch from "./pages/localSearch";
import Filter from "./pages/filter";
import Menu from "./pages/menu";
import Chat from "./pages/chat";
import ChatMessages from "./pages/chat_messages";
import FriendProfile from "./pages/friend_profile";
import Profile from "./pages/profile";
import Profileb from "./pages/profileb";
import Profilec from "./pages/profilec";
import GetRewards from "./pages/get_rewards";
import Faq from "./pages/faq";
import Nointernet from "./pages/nointernet";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="loginb" element={<LoginbPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="tutorial" element={<TutorialPage />} />
        <Route path="questions" element={<QuestionsPage />} />
        <Route path="localsPage" element={<LocalPage />} />
        <Route path="localSearch" element={<LocalSearch />} />
        <Route path="filter" element={<Filter />} />
        <Route path="menu" element={<Menu />} />
        <Route path="chat" element={<Chat />} />
        <Route path="chat_messages" element={<ChatMessages />} />
        <Route path="friend_profile" element={<FriendProfile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profileb" element={<Profileb />} />
        <Route path="profilec" element={<Profilec />} />
        <Route path="get_rewards" element={<GetRewards />} />
        <Route path="faq" element={<Faq />} />
        <Route path="nointernet" element={<Nointernet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
