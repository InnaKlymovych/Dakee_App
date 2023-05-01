import React from 'react';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import logo_small from '../images/icons/logo_small.png';


export interface IQuestionairebPageProps {};
const simble = ">";
const simble2 = "<";

const QuestionairebPage: React.FunctionComponent<IQuestionairebPageProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="tutoriale"
   }
   return (
   <div className='questionaireb' >
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
         <img src={logo_small} alt="logo" className='logo_small' />
         
      <div className="questionaire_box">
      <h2>1/4</h2>
      <p>Age:</p>
      <div className="questionaireb_button">
         <button className='buttons_text' >
            {simble2}20
         </button>
         <button className='buttons_text' >
            21-39
         </button>
         <button className='buttons_text' >
            40-59
         </button>
         <button className='buttons_text' >
            60+
         </button>
      </div>
      <a href="questionairec">Next {simble} </a>
   </div>
   </div>
   );
}

export default QuestionairebPage;