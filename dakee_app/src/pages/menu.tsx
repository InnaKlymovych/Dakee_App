import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';



export interface IMenuProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}


const Menu: React.FunctionComponent<IMenuProps> = props => {


   return (
      <div id="menu" className='menu' >
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button>  

         <div className="menu_box">
            <h2>Menu</h2>
            <ul>
               
               <li><a href="localsPage">Home</a></li>
               <li>
                  <a href="chat" className='chat' >
                  Chat
                  <div className="circle"><p>2</p></div>
                  </a>
               </li>
               <li><a href="profile">My profile</a></li>
               <li><a href="FAQ">FAQ</a></li>
            </ul>
            
         </div>
      </div>
   );
}

export default Menu;