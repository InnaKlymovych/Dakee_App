import React from 'react';
import {MouseEvent} from 'react';

export interface IQuestionairePageProps {};

const QuestionairePage: React.FunctionComponent<IQuestionairePageProps> = props => {
   const handleClick = (event: MouseEvent) => {
      window.location.href="signup"
   }
   return (
   <div onClick={handleClick}>
      <h1>Questionaire page</h1>
   </div>
   );
}

export default QuestionairePage;