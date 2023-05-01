import React from 'react';
import {MouseEvent} from 'react';
import back from '../images/icons/back.svg';
import logo_small from '../images/icons/logo_small.png';
import party from '../images/icons/party.svg';
import sightseeing from '../images/preferences/sightseeing.png';
import art from '../images/preferences/art.png';
import history from '../images/preferences/history.png';
import music from '../images/preferences/music.png';
import sports from '../images/preferences/sports.png';
import adventure from '../images/preferences/adventure.png';
import spiritual from '../images/preferences/spiritual.png';
import nature from '../images/preferences/nature.png';
import food from '../images/preferences/food.png';




export interface IQuestionaireePageProps {};



const QuestionaireePage: React.FunctionComponent<IQuestionaireePageProps> = props => {
   const buttonHandler = (event: MouseEvent) => {
      window.location.href="questionaired"
   }

   const buttonHandler1 = (event: MouseEvent) => {
      window.location.href="questionairef"
   }

   return (
   <div className='questionairee' >
      <button className='tutorial_back_button' onClick={buttonHandler}>
         <img src={back} alt="back" />
      </button>
      <img src={logo_small} alt="logo" className='logo_small' />
      <div className="questionairee_box">      
         <h2>4/4</h2>
         <p>Travel experiecne preferences:</p>
         <div className="questionairee_button">
            <button className='buttons' >
               <img src={party} alt="party" />
            </button>
            <button className='buttons' >
               <img src={sightseeing} alt="sightseeing" />
            </button>
            <button className='buttons' >
               <img src={art} alt="art" />
            </button>
            <button className='buttons' >
               <img src={history} alt="history" />
            </button>
            <button className='buttons' >
               <img src={music} alt="music" />
            </button>
            <button className='buttons' >
               <img src={sports} alt="sports" />
            </button>

            <button className='buttons' >
               <img src={adventure} alt="adventure" />
            </button>
            <button className='buttons' >
               <img src={spiritual} alt="spiritual" />
            </button>
            <button className='buttons' >
               <img src={nature} alt="nature" />
            </button>
            <button className='buttons' >
               <img src={food} alt="food" />
            </button>
         </div>
      </div>
      <div className="done1">
         <button onClick={buttonHandler1} className='done1' id='done1' >Done</button>
      </div>
   </div>
   
   );
}

export default QuestionaireePage;