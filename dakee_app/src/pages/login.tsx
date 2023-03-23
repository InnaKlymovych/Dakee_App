import React from 'react';

export interface ILoginPageProps {};

const LoginPage: React.FunctionComponent<ILoginPageProps> = props => {

   const handleClick = (event: MouseEvent) => {
      window.location.href="questionaire"
   }

   return (
      <div onClick={handleClick} id="login">
         <h1>Login page</h1>
      </div>
   );
}

export default LoginPage;