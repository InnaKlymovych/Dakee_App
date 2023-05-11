import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import my_photo from '../images/icons/my_profile.svg';
import red_star from '../images/preferences/Star-red.svg';


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
               <img src={my_photo} alt=""/>
               <h2>Inna</h2>
               <div className="my_stars">
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
               </div>
               <div className="total_stars">
                  <p>Total</p>
                  <img src={red_star} alt="red star" />
               </div>
            </div>
            <div className="my_menu">
               <ul>
                  <li><a href="Get_rewards">Get rewards</a></li>
                  <li><a href="Saved_rewards">Saved rewards</a></li>
                  <li><a href="Edit_profile">Edit profile</a></li>
                  <li><a href="Log_out">Log out</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Profile;