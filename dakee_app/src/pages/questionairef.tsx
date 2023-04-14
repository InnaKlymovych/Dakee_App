import React from 'react';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import logo_small from '../images/icons/logo_small.png';


export interface IQuestionairefPageProps {};


const QuestionairefPage: React.FunctionComponent<IQuestionairefPageProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="locals_search"
   }
   return (
   <div className='questionairef' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
            <img src={logo_small} alt="logo" />
      </div>
      <h2>Perfect! 
         <br />
         Let’s start!
      </h2>
      
      <div className="done">
         <button onClick={buttonHandler} className='done' id='done' >Ok</button>
      </div> 
      
   </div>
   );
}

export default QuestionairefPage;