import React from 'react';
import star from '../images/icons/star.svg';
import art from '../images/icons/art-red.svg';
import food from '../images/icons/food-red.svg';
import music from '../images/icons/music-red.svg';
import photo from '../images/photo1.jpg';

export const Card = () => {
const simble = ">";

   return (
      <div className="cards">
         <div className="user_name">
            <p>Name</p>
            <img src={star} alt="star" />
         </div>
         <div className="user_photo" style={{ backgroundImage: `url(${photo})` , backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '281px',
            height: '188px'
            
            }}>
            
         </div>
         <div className="cards_advices">
            <button className='art' ><img src={art} alt="art" /> art</button>
            <button className='food'><img src={food} alt="food" /> food</button>
            <button className='music'><img src={music} alt="music" /> music</button>
         </div>
         <button className='add_for' >Ask for advice {simble}</button>  
      </div>

      
   );
};

export default Card;