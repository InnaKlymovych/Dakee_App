import React from 'react';
import logo_small from '../images/icons/logo_small.png';



export interface ILocal_Search_PageProps {};



const Local_Search_Page: React.FunctionComponent<ILocal_Search_PageProps> = props => {
   

   return (
   <div className='local_search' >
      
      <img src={logo_small} alt="logo" />
      
      <h2>Find the Local!</h2>
   
      <p>Choose a city <br />to search for the Locals!</p>
   
   </div>
   );
}

export default Local_Search_Page;