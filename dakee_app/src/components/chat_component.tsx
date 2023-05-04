import React from 'react';
import photo from '../images/photo1.jpg';
import {MouseEvent} from 'react';

export const ChatComponent = () => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="chat_messages"
   }

   return (
      <div onClick={handleClick} className="chat_component">
         <div className="image" style={{ backgroundImage: `url(${photo})` , backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
            }}>

         </div>
         <div className="content">
            <div className="autor">
               <div className="name">
                  <p>  Name </p>
               </div>
               <div className="and">
                  <p> | </p>
               </div>
               <div className="time">
                  <p>time</p>
               </div>
            </div>
            <div className="message">
               <p>Hello , my name is Vova</p>
            </div>
         </div>
      </div>
   );
};

export default ChatComponent;