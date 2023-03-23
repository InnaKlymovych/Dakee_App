import React from 'react';
import {MouseEvent} from 'react';
import logo_img from '../images/logo_slogan.png';


export interface IHomePageProps {};

const HomePage: React.FunctionComponent<IHomePageProps> = props => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="login"
   }


   return (
      <div onClick={handleClick} id="body_logo">
         <div className="logo">
            <img src={logo_img} alt="img_logo" />
         </div>
         
         <p>Tap anywhere <br /> to continue</p>
         
      
   </div>
   );
}

export default HomePage;