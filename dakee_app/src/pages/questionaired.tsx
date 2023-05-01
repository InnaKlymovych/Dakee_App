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
      <button className='tutorial_back_button' onClick={buttonHandler}>
         <img src={back} alt="back" />
      </button>
      <img src={logo_small} alt="logo" className='logo_small'/>
         
      <div className="questionaire_box">
         <h2>3/4</h2>
         <form>
            
            <div className="live_in">
               <label htmlFor="">I currently live in:</label>
               <input
                  name='live_in'
                  placeholder="City, Country" 
                  id="live_in"
                  type="name"/>
            </div>
            
            <div className="advices_for">
               <label htmlFor="">I can give advices for:</label>
               <input
                  placeholder="City, Country"
                  name="name"
                  id="advices_for"
                  type="name"/>
            </div>

         </form>
         <button className='questionaired_box_button'> + Add another place</button>   
         <a href="questionairee">Next {simble} </a>
      </div>
      
   </div>
   );
}

export default QuestionairedPage;