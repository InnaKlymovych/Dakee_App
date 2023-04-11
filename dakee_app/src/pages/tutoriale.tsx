import React from 'react';
import {MouseEvent} from 'react';
import logo_small from '../images/icons/logo_small.png';
import back from '../images/icons/back.svg';

export interface ITutorialePageProps {};

const TutorialePage: React.FunctionComponent<ITutorialePageProps> = props => {

   const buttonHandler = (event: MouseEvent) => {
      window.location.href="questionaire"
   }

   return (
   <div className='happy' id='happy' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' >
            <img src={back} alt="back" />
         </button>
         <img src={logo_small} alt="logo" />
      </div>
      <div className="tutorial_e_box">
         <div className="tutorial_e_text1">
            <h2>Done !<br /><br /> Let us ask five quick questions before we start. </h2>
         </div>
         <div className="tutorial_d_text2">
            <p>You can edit your anwsers later.</p>
         </div>
         <div className="done">
            <button onClick={buttonHandler} className='done' id='done' >Ok</button>
         </div>   
      </div>
      

   </div>
   );
}

export default TutorialePage;