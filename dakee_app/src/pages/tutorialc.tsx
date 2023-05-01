import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/icons/logo_small.png';
import vectorUp from '../images/icons/Vector (1).png';
import ellipse1 from '../images/icons/Ellipse 1.png'
import ellipse2 from '../images/icons/Ellipse 2.png'
import back from '../images/icons/back.svg';

export interface ITutorialcPageProps {};

const TutorialcPage: React.FunctionComponent<ITutorialcPageProps> = props => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="tutoriald"
   }
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="tutorialb"
   }
   return (
      <div className="tutorialc_main">
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
         <img src={logo_small} alt="logo" className='logo_small' />
         <div onClick={handleClick} className='tutorial_up' id='tutorial_up' >
               
            <h2>Who is <br /> a Local?</h2>
            <img src={vectorUp} alt="vectorUp" />
               <div className="tutorial_c_text2">
                  <p>A Local is a person who lives in a city and wants to give some tips to visitors. 
                  
                  <br />
                  <br />
                  
                  He or she recieves later avaliations from the Travellers. Each avaliation has a point 
                  value that can be exchanges for many rewards and discounts from our Partners.
                  </p>
               </div>
               <div className="ellipse">
                  <img src={ellipse2} alt="ellipse2" />            
                  <img src={ellipse2} alt="ellipse2" />
                  <img src={ellipse1} alt="ellipse1" />
                  <img src={ellipse2} alt="ellipse2" />
               </div>
               <p className='scip' >Scip the tutorial</p>
            </div>

   </div>
   );
}

export default TutorialcPage;