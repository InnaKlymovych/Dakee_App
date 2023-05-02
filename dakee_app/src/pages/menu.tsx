import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import filter_red from '../images/icons/filter-red.png';


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
            <h2>
               <img src={filter_red} alt="filter" />
               Menu
            </h2>
            
         </div>
      </div>
   );
}

export default Menu;