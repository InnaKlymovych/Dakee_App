import React from 'react';
import logo_small from '../images/icons/logo_small.png';
import filter from '../images/icons/filter.png';
import big_lupa from '../images/icons/Lupa.png';
import {MouseEvent} from 'react';


export interface ILocalPageProps {};


const simble3 = ">";
const LocalPage: React.FunctionComponent<ILocalPageProps> = props => {
   
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="local_search_b"
   }
   return (
   <div className='local' >
      
      <img src={logo_small} alt="logo" />
      
      <h2>Find the Local!</h2>
      <form action="">
         <input type="text" placeholder=' Choose a city...' />

         <button>
            <img src={filter} alt="filter" />
            Filters Search {simble3}
         </button>
         <button className='submit' onClick={buttonHandler}  >
            <img src={big_lupa} alt="lupa" />
         </button>
      </form>
      <p>Choose a city <br />to search for the Locals!</p>
   
   </div>
   );
}

export default LocalPage;