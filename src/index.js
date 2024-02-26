import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

// import LandingINGcomeSoftweare from "components/INGcomeSoftweare/LandingINGcomeSoftweare";

// import LandingSoft from "./components/INGcomeSoftweare/LandingINGcomeSoftweare"
import Landing from './components/INGcomeGeneral/Landing';
import ErrorPage from './components/Error-page/Error-page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>
      <Route
        path="/"
        element={ <Landing/> }
      />
      {/* <Route
        path="/software"
        element={ <Landing/> }
      /> */}
      <Route
        path="*"
        element={ <Landing/> }
      />
    </Routes>
    </BrowserRouter> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
