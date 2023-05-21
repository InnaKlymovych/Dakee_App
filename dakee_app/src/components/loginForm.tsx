import React from 'react';
import { MouseEvent } from 'react';

interface LoginFormProps {
   name?: any;
   value?: any;
}
interface LoginFormState {
   username : string,
   email : string,
   password : string,
   errors : {
      username :  string,
      email : string,
      password : string
   }
}

const Regex = RegExp(/^\s?[A-Z0–9]+[A-Z0–9._+-]{0,}@[A-Z0–9._+-]+\.[A-Z0–9]{2,4}\s?$/i);

const handleClick = (event: MouseEvent) => {
   window.location.href="loginb"
}
export class LoginForm extends React.Component<LoginFormProps, LoginFormState> 
{

   handleChange = (event : any) => { event.preventDefault();
      const { name, value } = event.target;
      let errors = this.state.errors;
   switch (name) {
   case 'username':
      errors.username = value.length < 5 ? 'Username must be 5 characters long!': '';
      break;
   case 'email':
      errors.email = Regex.test(value)? '': 'Email is not valid!';
      break;
   case 'password':
      errors.password = value.length < 8 ? 'Password must be eight characters long!': '';
      break;
   default:
      break;
   }

   
this.setState(Object.assign(this.state, { errors,[name]: value }));
console.log(this.state.errors);
}
   
   
   constructor(props: LoginFormProps) {
      super(props);
      const initialState = {
         username : '',
         email : '',
         password : '',
         errors : {
            username : '',
            email : '',
            password : ''
         } 
      }
      this.state = initialState;
      this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit = (event : any) => {
      event.preventDefault();
      let validity = true;
      Object.values(this.state.errors).forEach(
         (val) => val.length > 0 && (validity = false)
      );
      if(validity === true){
         console.log("Registering can be done");
      }else{
         console.log("You cannot be registered!!!")
      }
   }
render() {
   

   const {errors} = this.state 

   return (
   
      <div className="login-box">
      <form onSubmit={this.handleSubmit} noValidate >
         <div className="input_name">
            <input
            onChange={this.handleChange}
            placeholder="Name" 
            id="userName-input"
            type="text"/>
            {errors.username.length > 0 &&  <span style={{color: "red"}}>{errors.username}</span>}
         </div>

         <div className="input_mail">
            <input
            onChange={this.handleChange}
            name='email'
            placeholder="E-mail" 
            id="email"
            type="email"/>
            {errors.email.length > 0 &&  <span style={{color: "red"}}>{errors.email}</span>}
         </div>
         <div className="input_password">
            <input
            onChange={this.handleChange}
            placeholder="Password"
            name="password"
            id="password"
            type="password"/>
            {errors.password.length > 0 &&  <span style={{color: "red"}}>{errors.password}</span>}
         
         </div>

         
      <button onClick={handleClick} type="submit" id="login-button" >
         Sign up
      </button>
      </form>
      </div>
   );
};
}
