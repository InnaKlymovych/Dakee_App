import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import red_star from '../images/preferences/Star-red.svg';
import ryanair from '../images/icons/Ryanair.svg';



export interface IGetRewardsProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="profile"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="menu"
}
const GetRewards: React.FunctionComponent<IGetRewardsProps> = props => {


   return (
      <div id="getRewards" className='getRewards '>
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="getrewards_box">
            <h1>Rewards</h1>
            <p>175 <img src={red_star} alt="" /> </p>
            <div className="rewards">
               <div className="reward1">
                  <img src={ryanair} alt="" />
               </div>
               
               

            
            </div>
            
         </div>
      </div>
   );
};

export default GetRewards;