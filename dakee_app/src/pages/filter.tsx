import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import filter_red from '../images/icons/filter-red.png';



export interface IFilterProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="localsPage"
}


const Filter: React.FunctionComponent<IFilterProps> = props => {


   return (
      <div id="filter" className='filter' >
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button>  
         <button className='filter_search' onClick={buttonHandler1}>
         <img src={filter_red} alt="filter" />
         Filters  
         </button>
         <p>Gender</p>
         <div className="gender">
            <button>Male</button>
            <button>Female</button>
         </div>
         
      </div>
      
   );
}

export default Filter;