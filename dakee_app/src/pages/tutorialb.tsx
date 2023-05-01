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
   <div className="tutorial_main" id='tutorial_main'>
         <button className='tutorial_back_button' onClick={buttonHandler}>
               <img src={back} alt="back" />
         </button>
         <img src={logo_small} alt="logo" className='logo_small' />
         <div onClick={handleClick} className='tutorial_plane' id='tutorial_plane' >
            
            <h2>Who is <br/> a traveller? </h2>
            <img src={plane} className='plane' alt="plane" />
               <div className="tutorial_b_text2">
                  <p>A Traveller looks for a matching Local personto get tips via chat on what to see, 
                     visit or do in a specific city.
                     <br />
                     <br />         
                     He or she can later give the avaliations for
                     the tips given.
                  </p>
               </div>
            <div className="ellipse">
               <img src={ellipse2} alt="ellipse2" />
               <img src={ellipse1} alt="ellipse1" />
               <img src={ellipse2} alt="ellipse2" />
               <img src={ellipse2} alt="ellipse2" />
            </div>
            <p className='scip' >Scip the tutorial</p>
         </div>

   </div>
   ); 
}
export default TutorialbPage;