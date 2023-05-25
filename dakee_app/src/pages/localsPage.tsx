import React from 'react';
import logo_small from '../images/icons/logo_small.png';
import filter from '../images/icons/filter.png';
import big_lupa from '../images/icons/Lupa.svg';
import {MouseEvent} from 'react';


export interface ILocalPageProps {};


const simble3 = ">";

const LocalPage: React.FunctionComponent<ILocalPageProps> = props => {
   
   const buttonHandler = (event: MouseEvent) => {
      
      window.location.href="localSearch"
   }

   const buttonHandler1 = (event: MouseEvent) => {
      window.location.href="filter"
   }

   const buttonHandler2 = (event: MouseEvent) => {
      window.location.href="menu"
   }
   
   return (
   <div className='local' >
      <div className="logo_small">
         <img src={logo_small} alt="logo" className='logo_small' onClick={buttonHandler2} />
         <div className="local_circle">
            <p>2</p>
         </div>
      </div>
      
   <div className="local_box">   
      <h2>Find the Local!</h2>
      <form >
         <input type="text" placeholder= 'Choose a city...' />

         <button className='filter_search' onClick={buttonHandler1}>
            <img src={filter} alt="filter" />Filters <br /> Search {simble3}
         </button>
         
      </form>
      <button className='submit_search' onClick={buttonHandler}  >
         <img src={big_lupa} alt="lupa" />
      </button>
      <p>Choose a city <br />to search for the Locals!</p>
      </div>
   </div>
   );
}

export default LocalPage;