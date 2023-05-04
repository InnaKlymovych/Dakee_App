import React from 'react';
import Card from '../components/card';
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
   const buttonHandler1 = (event: MouseEvent) => {
      window.location.href="menu"
   }
   const buttonHandler2 = (event: MouseEvent) => {
      window.location.href="filter"
   }
   return (
   <div className='local_b' >
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
         <div className="logo_small">
            <img src={logo_small} alt="logo" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>
         
   <div className="localb_box">   
      <h2>Results:</h2>
   
      <form>
         <input type="text" placeholder=' Choose a city...' />

         <button className='localb_search' onClick={buttonHandler2} >
            <img src={filter} alt="filter" />
            Filters Search {simble3}
         </button>
      </form>

      <div className="cards">
         <Card />
      </div>
      </div>
   </div>
   );
}

export default LocalSearch;