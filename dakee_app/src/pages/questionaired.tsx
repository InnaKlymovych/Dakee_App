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
      <div className="questionaire_box">
         <form>
         <p>I currently live in:</p>
            <div className="live_in">

               <input
               name='live_in'
               placeholder="City, Country" 
               id="live_in"
               type="name"/>
            </div>
         <p>I can give advices for:</p>
            <div className="advices_for">

               <input
               placeholder="City, Country"
               name="name"
               id="advices_for"
               type="name"/>

            </div>

            <button className='questionaire_box_button'> + Add another place</button>
         </form>
      </div>
      <a href="questionairee">Next {simble} </a>
   </div>
   );
}

export default QuestionairedPage;