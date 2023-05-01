import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/icons/logo_small.png';
import back from '../images/icons/back.svg';

export interface ITutorialePageProps {};

const TutorialePage: React.FunctionComponent<ITutorialePageProps> = props => {

   const buttonHandler = (event: MouseEvent) => {
      window.location.href="questionaireb"
   }

   const buttonHandler1 = (event: MouseEvent) => {
      window.location.href="tutoriald"
   }

   return (
   <div className='tutoriale' id='tutoriale' >
      
      <button className='tutorial_back_button'  onClick={buttonHandler1}>
         <img src={back} alt="back" />
      </button>
      <img src={logo_small} alt="logo" className='logo_small' />
      
      <div className="tutorial_e_box">
         
         <h2> Done !<br /><br /> Let us ask five quick questions before we start. </h2>
         
         <p> You can edit your anwsers later.</p>
         
         <div className="done">
            <button onClick={buttonHandler} className='done' id='done' >Ok</button>
         </div>   
      </div>
      

   </div>
   );
}

export default TutorialePage;