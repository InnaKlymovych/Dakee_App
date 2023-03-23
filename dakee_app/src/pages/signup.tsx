import React from 'react';
import {MouseEvent} from 'react';

export interface ISignupPageProps {};

const SignupPage: React.FunctionComponent<ISignupPageProps> = props => {
   const handleClick = (event: MouseEvent) => {
      window.location.href="tutorial"
   }
   return (
   <div onClick={handleClick}>
      <h1>Signup page</h1>
   </div>
   );
}

export default SignupPage;