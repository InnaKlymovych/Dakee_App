import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import my_photo from '../images/icons/my_profile.svg';
import button1 from '../images/Component 1.svg';
import button2 from '../images/Component 2.svg';

export interface IProfilebProps {};

var less = ">";

const buttonHandler = (event: MouseEvent) => {
   window.location.href="profile"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="menu"
}

const buttonHandler2 = (event: MouseEvent) => {
   window.location.href="profilec"
}
const Profileb: React.FunctionComponent<IProfilebProps> = props => {


   return (
      <div id="my_profileb" className='my_profileb '>
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="my_profileb_box">
            <h1>Edit Profile</h1>
            <div className="my_profile_info">
               <img src={my_photo} alt=""/>
               <a href="">Change photo {less}</a>
            </div>
            <form action="">
               <label htmlFor="user_name">Name (this will be public on your Profile)</label>
               <input type="text" className='user_name' />
               <hr />
               <label htmlFor="user_city">Current City</label>
               <input type="text" className='user_city' />
               <hr />
               
               <label htmlFor="checkbox">Cities that you can give advices about</label>
               <input type="checkbox" className='checkbox' value="Chicago IL, USA " />
               
               
               <hr />
               <input type="textarea" name="textarea" id="textarea"  />
               Hi there, I'm Jane, a Chicago native who's been bitten by the travel bug, especially when it 
               comes to exploring Europe. From the charming streets of Paris to the historic landmarks in Rome, 
               I love discovering new cultures, meeting locals, and trying new foods. 
               Join me on my journey and let's discover the beauty of Europe together!
               <hr />
               <div className="user_buttons">
                  <p>Travel experience preferences</p>
                  <button><img src={button1} alt="button1" /></button>
                  <button><img src={button2} alt="button2" /></button>
               </div>
               <hr />
               
               <input onClick={buttonHandler2} className='save' type="button" value="Save" />
            </form>
         </div>
      </div>
   );
};

export default Profileb;