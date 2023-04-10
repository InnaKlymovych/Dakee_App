import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/icons/logo_small.png';
import vectorUp from '../images/icons/Vector (1).png';
import ellipse1 from '../images/icons/Ellipse 1.png'
import ellipse2 from '../images/icons/Ellipse 2.png'

export interface ITutorialcPageProps {};

const TutorialcPage: React.FunctionComponent<ITutorialcPageProps> = props => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="tutoriald"
   }
   return (
   <div onClick={handleClick} className='tutorial_up' id='tutorial_up' >
      <img src={logo_small} alt="logo" />
      <div className="tutorial_c_box">
         <div className="tutorial_c_text1">
            <h2>Hi, Inna! <br /> Here´s a short <br />tutorial for you:</h2>
         </div>
         <img src={vectorUp} alt="vectorUp" />
         <div className="tutorial_c_text2">
            <p>Dakee was created to give the real, non-touristic experience in a visited city. 
               Based on your interests, we connect Travellers and Locals to exchange 
               ideas and give tips on what is actually worth to do and see. No tourist cliché!
            </p>
         </div>
         <div className="ellipse">
            <img src={ellipse2} alt="ellipse2" />            
            <img src={ellipse2} alt="ellipse2" />
            <img src={ellipse1} alt="ellipse1" />
            <img src={ellipse2} alt="ellipse2" />
         </div>
         <p>Scip the tutorial</p>
      </div>
      

   </div>
   );
}

export default TutorialcPage;