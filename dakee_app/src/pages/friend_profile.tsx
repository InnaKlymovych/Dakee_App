import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import photo from '../images/photo1.jpg';
import location from '../images/icons/location.svg';
import red_star from '../images/icons/star.svg';


export interface IFriendProfileProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="menu"
}
const FriendProfile: React.FunctionComponent<IFriendProfileProps> = props => {


   return (
      <div id="friend_profile" className='friend_profile '>
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="friend_profile_box">
            <div className="friend_profile_photo">
               <img src={photo} alt=""/>
            </div>
            <h2>Name</h2>
            <div className="friend_location">
               <img src={location} alt="" />
               <p>City</p>
               
            </div>
            <div className="red_stars">
               <img src={red_star} alt="" />
               <img src={red_star} alt="" />
               <img src={red_star} alt="" />
               <img src={red_star} alt="" />
               <img src={red_star} alt="" />
            </div>

            <div className="about_friend">
               <h4>About</h4>
               <p>Hey there, I'm Dan , a Faro local who's all about discovering the city's hidden gems. 
                  I'm a huge fan of indie music concerts and modern art galleries, and I love exploring small, 
                  underground restaurants that only the locals know about. Think of me as your personal tour guide to 
                  Faro's coolest spots. 
                  Let's explore Faro together! 
               </p>
            </div>
            <div className="friend_advices">
               <h4>Gives advices for:</h4>
               <ul>
                  <li>Faro , Portugal</li>
                  <li>Berlin , Germany</li>
               </ul>
            </div>
            <div className="travel_experience">
               <ul>
                  <li>travel</li>
                  <li>art</li>
               </ul>
            </div>

         </div>
      </div>
   );
};

export default FriendProfile;