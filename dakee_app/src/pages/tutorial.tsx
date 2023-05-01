import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/logo_small.svg';
import friends from '../images/icons/user-friends.svg';
import ellipse1 from '../images/icons/Ellipse 1.png'
import ellipse2 from '../images/icons/Ellipse 2.png'

export interface ITutorialPageProps {};

const TutorialPage: React.FunctionComponent<ITutorialPageProps> = props => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="tutorialb"
   }
   
   return (
   <div onClick={handleClick} id='tutorial_friends' >
      <img src={logo_small} alt="logo" className='logo_small' />
      <div className="tutorial_box">
         <div className="tutorial_text1">
            <h2>Hi, Adelina! <br /> Here´s a short <br />tutorial for you:</h2>
         </div>
         <img src={friends} alt="friends" className='friends'/>
         <div className="tutorial_text2">
            <p>Dakee was created to give the real, non-touristic experience in a visited city. 
               <br />
               <br />
               Based on your interests, we connect Travellers and Locals to exchange 
               ideas and give tips on what is actually worth to do and see. No tourist cliché!
            </p>
         </div>
         <div className="ellipse">
            <img src={ellipse1} alt="ellipse1" />
            <img src={ellipse2} alt="ellipse2" />
            <img src={ellipse2} alt="ellipse2" />
            <img src={ellipse2} alt="ellipse2" />
         </div>
         
      </div>
      <p className='scip' >Scip the tutorial</p>
      

   </div>
   );
}

export default TutorialPage;