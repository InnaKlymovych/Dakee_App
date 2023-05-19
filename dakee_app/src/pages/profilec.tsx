import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import my_photo from '../images/icons/my_profile.svg';
import button1 from '../images/Component 1.svg';
import button2 from '../images/Component 2.svg';

export interface IProfilecProps {};

var less = ">";

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="chat"
}

const buttonHandler2 = (event: MouseEvent) => {
   window.location.href="profile3"
}
const Profilec: React.FunctionComponent<IProfilecProps> = props => {


   return (
      <div id="my_profilec" className='my_profilec '>
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="my_profilec_box">
            <h1>Edit Profile</h1>
            <div className="my_profile_info">
               <img src={my_photo} alt=""/>
               <a href="#">Change photo {less}</a>
            </div>
            <h2>Yay! <br /> Your profile was successfully <br /> updated!</h2>
            <button>Ok</button>
            
         </div>
      </div>
   );
};

export default Profilec;