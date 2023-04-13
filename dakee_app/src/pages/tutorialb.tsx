import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/icons/logo_small.png';
import plane from '../images/icons/Plane.png';
import ellipse1 from '../images/icons/Ellipse 1.png'
import ellipse2 from '../images/icons/Ellipse 2.png'
import back from '../images/icons/back.svg';


export interface ITutorialbPageProps {};

const TutorialbPage: React.FunctionComponent<ITutorialbPageProps> = props => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="tutorialc"
   }
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="tutorial"
   }
   return (
   <div className="tutorial_main">
         <button className='tutorial_back_button' onClick={buttonHandler}>
               <img src={back} alt="back" />
         </button>
         <div onClick={handleClick} className='tutorial_plane' id='tutorial_plane' >
            <div className="tutorial_back">

               <img src={logo_small} alt="logo" />
            </div>
      
         <div className="tutorial_b_box">
            <div className="tutorial_b_text1">
               <h2>Hi, Inna! <br /> Here´s a short <br />tutorial for you:</h2>
            </div>
            <img src={plane} alt="plane" />
            <div className="tutorial_b_text2">
               <p>Dakee was created to give the real, non-touristic experience in a visited city. 
                  Based on your interests, we connect Travellers and Locals to exchange 
                  ideas and give tips on what is actually worth to do and see. No tourist cliché!
               </p>
            </div>
            <div className="ellipse">
               <img src={ellipse2} alt="ellipse2" />
               <img src={ellipse1} alt="ellipse1" />
               <img src={ellipse2} alt="ellipse2" />
               <img src={ellipse2} alt="ellipse2" />
            </div>
            <p>Scip the tutorial</p>
         </div>


      </div>
   

   </div>
   ); 
}
export default TutorialbPage;