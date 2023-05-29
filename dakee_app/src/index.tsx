import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(

   <React.StrictMode>
      <App />
   </React.StrictMode>
   
);

serviceWorkerRegistration.register();

reportWebVitals();