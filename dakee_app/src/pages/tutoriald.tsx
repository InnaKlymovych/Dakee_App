import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/icons/logo_small.png';
import happy from '../images/icons/happy-beaming.png';
import ellipse1 from '../images/icons/Ellipse 1.png'
import ellipse2 from '../images/icons/Ellipse 2.png'
import back from '../images/icons/back.svg';


export interface ITutorialdPageProps {};

const TutorialdPage: React.FunctionComponent<ITutorialdPageProps> = props => {

   const buttonHandler = (event: MouseEvent) => {
      window.location.href="tutoriale"
   }
   return (
   <div className='happy' id='happy' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' >
            <img src={back} alt="back" />
         </button>
         <img src={logo_small} alt="logo" />
      </div>
      <div className="tutorial_d_box">
         <div className="tutorial_d_text1">
            <h2>Be both!</h2>
         </div>
         <img src={happy} alt="happy_face" />
         <div className="tutorial_d_text2">
            <p>As a Dakee user, you can choose to be both Traveller and Local. 
            Gain discounts by giving advices to visitors and get the unforgettable local experience
            while travelling!
            </p>
         </div>
         <div className="done">
            <button onClick={buttonHandler} className='done' id='done' >Done</button>
         </div>
         <div className="ellipse">
            <img src={ellipse2} alt="ellipse2" />            
            <img src={ellipse2} alt="ellipse2" />            
            <img src={ellipse2} alt="ellipse2" />
            <img src={ellipse1} alt="ellipse1" />
         </div>
      </div>
      

   </div>
   );
}

export default TutorialdPage;