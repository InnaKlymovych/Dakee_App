import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import photo from '../images/photo1.jpg';
import star_white from '../images/icons/star_white.svg';


export interface IChatMessagesProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="menu"
}
const ChatMessages: React.FunctionComponent<IChatMessagesProps> = props => {

var simble = ">";
   return (
      <div id="chat_messages" className='chat_messages ' >
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="chat_messages_box">
            <div className="friend">
               <div className="friend_photo" >
                  <img src={photo} alt=""/>
               </div>
               <div className="friend_info">
                  <h2>Name</h2>
                  <p>City</p>
                  <a href="friend_profile">See details {simble}</a>
                  <hr />
                  <p>Rate:</p>
                  <div className="friend_stars">
                     <img src={star_white} alt="star" />
                     <img src={star_white} alt="star" />
                     <img src={star_white} alt="star" />
                     <img src={star_white} alt="star" />
                     <img src={star_white} alt="star" />
                  </div>
               </div>
            </div>
            <div className="chating">
               <input className='chating_input' type="text" placeholder='Type something...' />
               <input className='chat_buttom' type="button" />
            </div>
            
            
         
         </div>
      </div>
   );
}

export default ChatMessages;