import React from 'react';
import logo_small from '../images/icons/logo_small.png';
import back from '../images/icons/back.svg';
import { MouseEvent } from 'react';
import filter from '../images/icons/filter.png';

export interface ILocalSearchProps {};

const simble3 = ">";

const LocalSearch: React.FunctionComponent<ILocalSearchProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="localsPage"
   }
   
   return (
   <div className='local' >
      <div className="tutorial_back">
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
            <img src={logo_small} alt="logo" />
      </div>
      
      <h2>Results:</h2>
   
      <form>
         <input type="text" placeholder=' Choose a city...' />

         <button className='filter_search' >
            <img src={filter} alt="filter" />
            Filters Search {simble3}
         </button>
      </form>

      <div className="cards">
         <div className="card" id='card1'>

         </div>
         <div className="card" id='card2'>

         </div>
         <div className="card" id='card3'>

         </div>
         <div className="card" id='card4'>

         </div>
      </div>
   
   </div>
   );
}

export default LocalSearch;