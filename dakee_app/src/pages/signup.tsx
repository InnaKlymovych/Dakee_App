import React  from 'react';
import LoginForm from '../components/loginForm';
import {MouseEvent} from 'react';
import logo_img from '../images/logo_login.png';
import back from '../images/icons/back.svg';
import facebook from '../images/icons/facebook.svg';
import google from '../images/icons/google.svg';
import apple from '../images/icons/apple.svg';


export interface ISignupPageProps {};


const SignupPage: React.FunctionComponent<ISignupPageProps> = props => {
   const handleClick = (event: MouseEvent) => {
      window.location.href="login"
   }


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

      <h3>Sign up <br/>with e-mail</h3>

      <div className='login_form' >
         <LoginForm />
      </div>

      <p>or sign up using:</p>

      <div className="icons">
         <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /> </a>
         <a href="https://www.google.com/?safe=active&ssui=on"><img src={google} alt="google" /></a>
         <a href="https://www.apple.com/ca/store?afid=p238%7CYccrbc3X-dc_mtid_1870765e38482_pcrid_78134249231620_pgrid_5206919623_pntwk_o_pchan__pexid__&cid=aos-ca-kwbi-brand--slid---product-"><img src={apple} alt="apple" width="26px" height="30px" /></a>
      </div>

   </div>
   );
}

export default SignupPage;