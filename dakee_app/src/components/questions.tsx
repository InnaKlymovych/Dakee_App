import React, { useState } from 'react';
import list_simble from '../images/list_simble.png';

export const Questions: React.FC = () => {
   const [clickedItem, setClickedItem] = useState<number | null>(null);

   const handleClick = (itemNumber: number) => {
      if (clickedItem === itemNumber) {
         // Clicked on the same item, toggle off
         setClickedItem(null);
         } else {
         // Clicked on a different item, set as clicked
         setClickedItem(itemNumber);
         }
   };

   const outputText = (() => {
   switch (clickedItem) {
      case 1:
         return 'Dakee finds Locals in a city searched by you based on yours and the Locals mutual interests and preferences. You can always filter your search results.';
         
      case 2:
         return 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo rea';
         
      case 3:
         return 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ';
         
      default:
         return '';
   }
   })();

   
   return (
      <div className='questions_faq' >
         <ul>
            <li> 
               <img src={list_simble} alt="simble" /> 
               <span onClick={() => handleClick(1)}>How does Dakee connect me with locals?
               </span>
            </li>
            {clickedItem === 1 && 
            <p className='outputText' >{outputText}</p>}
            <li> 
               <img src={list_simble} alt="simble" /> 
               <span onClick={() => handleClick(2)}>Is Dakee free to use?
               </span>
            </li>
            {clickedItem === 2 && <p className='outputText'>{outputText}</p>}
            <li> 
               <img src={list_simble} alt="simble" /> 
               <span onClick={() => handleClick(3)}>Can I book tours or activities through the app with a recommended local?
               </span>
            </li>
            {clickedItem === 3 && <p className='outputText'>{outputText}</p>}
         </ul>
         
      </div>
   );
}

