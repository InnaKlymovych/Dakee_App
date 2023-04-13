import React from 'react';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import logo_small from '../images/icons/logo_small.png';
import female from '../images/icons/female.png';
import male from '../images/icons/male.png';
import uvicorn from '../images/icons/uvicorn.png';
import prefer_not_to_say from '../images/icons/prefer_not_to_say.png';

export interface IQuestionairecPageProps {};
const simble = ">";


const QuestionairecPage: React.FunctionComponent<IQuestionairecPageProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="questionaireb"
   }
   return (
   <div className='questionairec' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
         
            <img src={logo_small} alt="logo" />
         
      </div>
      <h2>3/5</h2>
      <p>Gender:</p>
      <div className="questionairec_button">
         <button className='buttons' >
            <img src={female} alt="female" />
         </button>
         <button className='buttons' >
            <img src={male} alt="male" />
         </button>
         <button className='buttons' >
            <img src={uvicorn} alt="uvicorn" />
         </button>
         <button className='buttons' >
            <img src={prefer_not_to_say} alt="prefer_not_to_say" />
         </button>
      </div>
      <a href="questionaired">Next {simble} </a>
   </div>
   );
}

export default QuestionairecPage;