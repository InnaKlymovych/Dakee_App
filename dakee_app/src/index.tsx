import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import Aplication from "./App";

if ('serviceWorker' in navigator) {
   window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.tsx')
      .then(registration => {
         console.log('Service Worker registered:', registration);
      })
      .catch(error => {
         console.error('Error registering Service Worker:', error);
      });
   });
}

ReactDOM.render(
   <React.StrictMode>
      <Aplication />
   </React.StrictMode> ,
   document.getElementById('root')
);