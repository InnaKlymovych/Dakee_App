import React from 'react';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import nointernet from '../images/icons/no_net.svg';


export interface INointernetProps {};



const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="localsPage"
}
const Nointernet: React.FunctionComponent<INointernetProps> = props => {


   return (
      <div id="nointernet" className='nointernet '>
         
      
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            
         </div>

         <div className="nointernet_box">
            <img src={nointernet} alt="nointernet" />
            <h2>Oops!</h2>
            <p>Looks like the Internet is on vacation. <br /> Check your connection and try again.</p>
            <button onClick={buttonHandler1}>Try again</button>
         </div>
      </div>
   );
};

export default Nointernet;