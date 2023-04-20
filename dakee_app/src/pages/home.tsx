import React from 'react';
import {MouseEvent} from 'react';
import logo_img from '../images/logo.svg';


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
         <div className="logo_text">
            <p>Tap anywhere <br /> to continue</p>
         </div>  
         
      </div>
   );
}

export default HomePage;