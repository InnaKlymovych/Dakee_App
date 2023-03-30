import React from 'react';
import eye_open from '../images/icons/eye_open.svg';
import eye_close from '../images/icons/eye_closed.svg';

export const LoginForm = () => {
   /*const [username, setUsername] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [isDisabled, setIsDisabled] = React.useState(true);

   function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
   event.preventDefault();
   onSubmit(username, password);
   setUsername('');
   setPassword('');
   setIsDisabled(true);
   }

   function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
      setUsername(event.target.value.toLowerCase());
   }

   function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
      setPassword(event.target.value.toLowerCase());
   }*/

   /*useEffect(() => {
      if (password !== '' && username !== '') {
      setIsDisabled(false);
   } else {
      setIsDisabled(true);
   }
   }, [username, password]);*/

   return (
      <form>
         <div className="input_name">
            <input
            placeholder="Name" 
            id="userName-input"
            type="text"/>
         </div>
         <div className="input_mail">
            <input
            placeholder="E-mail" 
            id="userEmail-input"
            type="email"/>
         </div>
         <div className="input_password">
            <input
            placeholder="Password"
            id="password-input"
            type="Password"/>
            <img src={eye_open} alt="eye_open" id='eye_open' />
            <img src={eye_close} alt="eye_close" id='eye_close' />
         </div>

         
      <button id="login-button" type="submit">
         Sign up
      </button>
      </form>
   );
};

export default LoginForm;