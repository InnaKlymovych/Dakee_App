import React from 'react';
import { useNavigate } from "react-router-dom";



export const LoginForm = () => {

const navigate = useNavigate();


   return (
   
      <div className="login-box">
      <form >
         <div className="input_name">
            <input
            placeholder="Name" 
            id="userName-input"
            type="text"/>
         
         </div>

         <div className="input_mail">
            <input
            name='email'
            placeholder="E-mail" 
            id="email"
            type="email"/>
         
         </div>
         <div className="input_password">
            <input
            placeholder="Password"
            name="password"
            id="password"
            type="password"/>
            
         
         </div>

         
      <button onClick={() => navigate("/tutorial")} type="submit" id="login-button" >
         Sign up
      </button>
      </form>
      </div>
   );
};

export default LoginForm;