import React  from 'react';
import LoginForm from '../components/loginForm';
import {MouseEvent} from 'react';
import logo_img from '../images/logo_login.png';
import back from '../images/icons/back.svg';
import facebook from '../images/icons/facebook.svg';
import google from '../images/icons/google.svg';
import apple from '../images/icons/apple.svg';


export interface ISignupPageProps {};

/*const onSubmitUsername = (username, password) => alert(`You entered: ${username} and password ${password}`);
*/
const SignupPage: React.FunctionComponent<ISignupPageProps> = props => {
   const handleClick = (event: MouseEvent) => {
      window.location.href="login"
   }
   /*const onSubmitUsername = (username, password) => 
   alert(`You entered: ${username} and password ${password}`);*/

   return (
   <div className="signup" id='signup'>
      
      <div className="back">
         <button className='back' onClick={handleClick}>
            <img src={back} alt="back" />
         </button>
      </div>

      <div className="logo_signup">
            <img src={logo_img} alt="img_logo" />
      </div>

      <h3>Sign up with e-mail</h3>

      <div className='login_form' >
         <LoginForm />
      </div>

      <p>or sign up using:</p>

      <div className="icons">
         <img src={facebook} alt="facebook" /> 
         <img src={google} alt="google" />
         <img src={apple} alt="apple" />
      </div>

   </div>
   );
}

export default SignupPage;