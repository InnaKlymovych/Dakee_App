import React from 'react';
import back_red from '../images/icons/back_red.png';
import { MouseEvent } from 'react';
import filter_red from '../images/icons/filter-red.png';
import art from '../images/icons/art-red.svg';
import food from '../images/icons/food-red.svg';
import music from '../images/icons/music-red.svg';
import stars from '../images/icons/star.svg';

export interface IFilterProps {};
var less = "<";
const buttonHandler = (event: MouseEvent) => {
   window.location.href="localsPage"
}


const Filter: React.FunctionComponent<IFilterProps> = props => {


   return (
      <div id="filter" className='filter' >
         
         <button className='tutorial_back_button' onClick={buttonHandler}>
            <img src={back_red} alt="back" />
         </button>  

         <div className="filter_box">
            <h2>
               <img src={filter_red} alt="filter" />
               Filters 
            </h2>
            <p>Gender</p>
            <div className="gender">
               <button>Male</button>
               <button>Female</button>
            </div>
            <p>Age</p>
            <input type="range" />
            <div className="range">
               <p>{less} 20</p>
               <p>40</p>
               <p>60+</p>
            </div>
            <p>Advices in</p>
            <div className="advices">
               <button className='art' ><img src={art} alt="art" /> art</button>
               <button className='food'><img src={food} alt="food" /> food</button>
               <button className='music'><img src={music} alt="music" /> music</button>
            </div>
            <p>Minimal rating</p>
            <div className="stars">
               <img src={stars} alt="stars" />
               <img src={stars} alt="stars" />
               <img src={stars} alt="stars" />
               <img src={stars} alt="stars" />
               <img src={stars} alt="stars" />
            </div>
         </div>
      </div>
      
   );
}

export default Filter;