import React from 'react';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import logo_small from '../images/icons/logo_small.png';


export interface IQuestionairedPageProps {};
const simble = ">";


const QuestionairedPage: React.FunctionComponent<IQuestionairedPageProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="questionairec"
   }
   return (
   <div className='questionaired' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
         
            <img src={logo_small} alt="logo" />
         
      </div>
      <h2>4/5</h2>
      
      <form>
      <p>I currently live in:</p>
         <div className="input_mail">
         
            <input
            name='email'
            placeholder="E-mail" 
            id="email"
            type="email"/>
         </div>
      <p>I can give advices for:</p>
         <div className="input_password">
            
            <input
            placeholder="Password"
            name="password"
            id="password"
            type="password"/>

         </div>
      </form>
      <a href="questionairee">Next {simble} </a>
   </div>
   );
}

export default QuestionairedPage;