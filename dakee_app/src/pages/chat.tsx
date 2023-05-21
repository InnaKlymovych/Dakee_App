import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import ChatComponent from '../components/chat_component';

export interface IChatProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="menu"
}
const Chat: React.FunctionComponent<IChatProps> = props => {


   return (
      <div id="chat" className='chat' >
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="chat_box">
            <h2>Chat</h2>
            <div className="chat_box_buttons">    
               <button>As traveller</button>
               <button>As local</button>
            </div>
            <hr />
            <div className="chat_conteiners">
               < ChatComponent />
            </div>
         
         </div>
      </div>
   );
}

export default Chat;