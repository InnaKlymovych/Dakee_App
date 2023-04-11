import React from 'react';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import logo_small from '../images/icons/logo_small.png';
import plane from '../images/icons/Vector.png';
import local from '../images/icons/local.png';

export interface IQuestionairePageProps {};
const simble = ">";

const QuestionairePage: React.FunctionComponent<IQuestionairePageProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="tutoriale"
   }
   return (
   <div className='questionaire' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
         <button>
            <img src={logo_small} alt="logo" />
         </button>
      </div>
      <h2>1/5</h2>
      <p>I am a:</p>
      <div className="questionaire_button">
         <button className='button_left' >
            <img src={plane} alt="plane" />
         </button>
         <button className='button_right' >
            <img src={local} alt="local" />
         </button>
      </div>
      <a href="questionaireb">Next {simble} </a>
   </div>
   );
}

export default QuestionairePage;