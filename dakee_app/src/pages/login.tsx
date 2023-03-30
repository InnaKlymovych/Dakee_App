import React from 'react';
import {MouseEvent} from 'react';
import logo_img from '../images/logo_login.png';


export interface ILoginPageProps {};

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {

   

   const buttonHandler = (event: MouseEvent) => {
      window.location.href="signup"
   }

   

   return (
      <div id="login">
         <div className="logo_login">
            <img src={logo_img} alt="img_logo" />
         </div>

         <div className="login_text1">
            <h2>Hey , <br/>have we met?</h2>
         </div>
         <div className="login_text2">
            <h4>Sign up to start or log in to your account.</h4>
         </div>
         <div className="sign_up">
            <button onClick={buttonHandler} className='sign_up' id='sign_up' >Sign up</button>
         </div>
         <div className="login_text3">
            <h4>Log In</h4>
         </div>
      </div>
   );
}

export default LoginPage;