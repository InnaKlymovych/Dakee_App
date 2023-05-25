import React , {useState} from 'react';


const LoginForm = () => {
   
   


   return (
   
      <div className="login-box">
      <form  noValidate action='http://127.0.0.1:3001/signup' method='POST'>
         <div className="input_name">
            <input
            /*onChange={e => setName(e.target.value)}*/
            placeholder="Name" 
            id="name"
            name= "name"
            type="text"
            required/>
            
         </div>

         <div className="input_mail">
            <input
            /*onChange={e => setEmail(e.target.value)}*/
            name='email'
            placeholder="E-mail" 
            id="email"
            type="email"
            required/>
            
         </div>
         <div className="input_password">
            <input
            /*onChange={e => setPassword(e.target.value)}*/
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            required/>
            
         
         </div>

         
      <button type="submit" id="login-button" >
         Sign up
      </button>
      </form>
      </div>
   );
};

export default LoginForm;