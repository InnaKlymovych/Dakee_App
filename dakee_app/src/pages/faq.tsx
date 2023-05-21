import React  from 'react';
import logo_small from '../images/icons/logo_small.png';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import {Questions} from '../components/questions';
export interface IFaqProps {};



const Faq: React.FunctionComponent<IFaqProps> = props => {
   
   const buttonHandler = (event: MouseEvent) => {
      
      window.location.href="menu"
   }

   const buttonHandler1 = (event: MouseEvent) => {
      window.location.href="chat"
   }

   
   

   
   return (
      <div className='faq' id='faq' >
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="menu" / >
         </button>
         <div className="logo_small">
            <img src={logo_small} alt="logo" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>
      
         <div className="faq_box">   
            <h2>Frequently <br /> Asked Questions</h2>
            <input type="text" placeholder='Search' />
               <div className="questions">
                  < Questions />
               </div>
               
         </div>
      </div>
   );

   }
export default Faq;