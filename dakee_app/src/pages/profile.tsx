import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import photo from '../images/photo1.jpg';
import red_star from '../images/icons/star.svg';


export interface IProfileProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="chat"
}
const Profile: React.FunctionComponent<IProfileProps> = props => {


   return (
      <div id="my_profile" className='my_profile '>
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="my_profile_box">
            <h1>My profile</h1>
            <div className="my_profile_info">
               <img src={photo} alt=""/>
               <h2>My name</h2>
               <div className="my_stars">
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
               </div>
               <div className="total_stars">
                  <p>Total</p>
               </div>
            </div>
            My profile
         </div>
      </div>
   );
};

export default Profile;