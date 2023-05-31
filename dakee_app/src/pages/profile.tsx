import React , {useState} from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import logo_red from '../images/logo_red.svg';
import my_photo from '../images/icons/my_profile.svg';
import red_star from '../images/preferences/Star-red.svg';

interface User {
   // Define the properties of the user object
   cityAdvices: string[];
   id: number;
   age: string;
   gender: string;
   currentCity: string;
   travelPrefs: string[];
   name: string;
   email: string;
   }

export interface IProfileProps {};

const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}

const buttonHandler1 = (event: MouseEvent) => {
   window.location.href="menu"
}
const Profile: React.FunctionComponent<IProfileProps> = props => {

   const queryParams = new URLSearchParams(window.location.search);
   const encodedData = queryParams.get("data");

   if (!encodedData) {
      window.location.href = "/signup";
   }
   const userID = JSON.parse(decodeURIComponent(encodedData || ""));
   console.log(userID);
   
   //let userData;
   
   let [userModel , setUserModel] = useState<User>(() => ({
      id: userID,
      age: "",
      gender: "",
      currentCity: "",
      cityAdvices: [],
      travelPrefs: [],
      name: "",
      email: ""
   }));

   const get_user_profile = async (data: any) => {
      
      const req = await fetch("http://localhost:3001/get_user_profile/" + data.id) ;
      
      const res = await req.json();
      //userData = res;//

      userModel.name = res.profile.name;
      console.log(res);
   }
   get_user_profile(userModel.id);

   return (
      <div id="my_profile" className='my_profile '>
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button> 
         <div className="logo_small">
            <img src={logo_red} alt="logo_red" className='logo_small' onClick={buttonHandler1}/>
            <div className="local_circle">
               <p>2</p>
            </div>
         </div>

         <div className="my_profile_box">
            <h1>My profile</h1>
         <div className="my_profile_info">
               <img src={my_photo} alt=""/>
               <h2>Inna</h2>
               <div className="my_stars">
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
                  <img src={red_star} alt="" />
               </div>
               <div className="total_stars">
                  <p>Total</p>
                  <img src={red_star} alt="red star" />
               </div>
            </div>
            <div className="my_menu">
               <ul>
                  <li><a href="get_rewards">Get rewards</a></li>
                  <li><a href="Saved_rewards">Saved rewards</a></li>
                  <li><a href="profileb">Edit profile</a></li>
                  <li><a href="login">Log out</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Profile;