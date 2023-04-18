import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';




export interface IFilterProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href=""
}


const Filter: React.FunctionComponent<IFilterProps> = props => {


   return (
      <div id="filter" className='filter' >
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button>  
      </div>
   );
}

export default Filter;