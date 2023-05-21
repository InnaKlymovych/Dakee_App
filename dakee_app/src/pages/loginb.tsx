import React , { ChangeEvent, FormEvent } from 'react';
import {MouseEvent} from 'react';
import logo_img from '../images/logo.svg';
import facebook from '../images/icons/facebook.svg';
import google from '../images/icons/google.svg';
import apple from '../images/icons/apple.svg';
import back from '../images/icons/back.svg';


interface LoginbPageState {
   username: string;
   password: string;
   errors: {
      username: string;
      password: string;
   };
}

const buttonHandler = (event: MouseEvent) => {
   window.location.href="login"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="localsPage"
}

export class LoginbPage extends React.Component<{}, LoginbPageState> {
   constructor(props: {}) {
      super(props);
      this.state = {
         username: '',
         password: '',
         errors: {
            username: '',
            password: '',
         },
      };
   }
   handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      let errors = { ...this.state.errors };

      switch (name) {
         case 'username':
            errors.username = value.length === 0 ? 'Username is required!' : '';
            break;
         case 'password':
            errors.password = value.length === 0 ? 'Password is required!' : '';
            break;
         default:
            break;
      }

      
   };

   handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { username, password, errors } = this.state;

      // Check for form errors
      if (username.length === 0) {
         errors.username = 'Username is required!';
      }
      if (password.length === 0) {
         errors.password = 'Password is required!';
      }

      // If there are no errors, perform login
      if (errors.username === '' && errors.password === '') {
         console.log('Performing login...');
         // Add your login logic here
      }

      this.setState({ errors });
   };

   render() {
      const { username, password, errors } = this.state;

   return (
      <div className="signup" id='signup'>
      
      <div className="back">
         <button className='back' onClick={buttonHandler}>
            <img src={back} alt="back" />
         </button>
      </div>

      <div className="logo_signup">
            <img src={logo_img} alt="img_logo" />
      </div>

      <h3>Log In</h3>

      <div className='login_form' >
      
      <form onSubmit={this.handleSubmit} noValidate>
               <div className="input_name">
                  <input
                     onChange={this.handleChange}
                     placeholder="Username"
                     type="text"
                     name="username"
                     value={username}
                  />
                  {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
               </div>
               <div className="input_password">
                  <input
                     onChange={this.handleChange}
                     placeholder="Password"
                     type="password"
                     name="password"
                     value={password}
                  />
                  {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
               </div>

         
         <button onClick={buttonHandler1} type="submit" className='log_in' id='log_in' >Log in</button>
      </form>
      </div>

      <p>or sign up using:</p>

      <div className="icons">
         <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /> </a>
         <a href="https://www.google.com/?safe=active&ssui=on"><img src={google} alt="google" /></a>
         <a href="https://www.apple.com/ca/store?afid=p238%7CYccrbc3X-dc_mtid_1870765e38482_pcrid_78134249231620_pgrid_5206919623_pntwk_o_pchan__pexid__&cid=aos-ca-kwbi-brand--slid---product-"><img src={apple} alt="apple" width="26px" height="30px" /></a>
      </div>

   </div>
   );
};

}