import React , {useState} from 'react';
import Axios from 'axios';



const LoginForm = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const register = () => {

      if (!name || !email || !password) {
      console.log("Please provide all required fields.");
      return;
   }

   
      const formData = {
      username: name,
      email: email,
      password: password
      };

      Axios.post("http://localhost:3001/signup", formData)
      .then(response => {
         console.log(response);
         
      })
      .catch(error => {
         console.log("An error occurred while registering. Please try again later.");
         
      });
   };
   

   

   return (
   
      <div className="login-box">
      <form  noValidate action='/signup' method='POST'>
         <div className="input_name">
            <input
            onChange={e => setName(e.target.value)}
            placeholder="Name" 
            id="name"
            type="text"
            required/>
            
         </div>

         <div className="input_mail">
            <input
            onChange={e => setEmail(e.target.value)}
            name='email'
            placeholder="E-mail" 
            id="email"
            type="email"
            required/>
            
         </div>
         <div className="input_password">
            <input
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            required/>
            
         
         </div>

         
      <button onClick={register} type="submit" id="login-button" >
         Sign up
      </button>
      </form>
      </div>
   );
};

export default LoginForm;