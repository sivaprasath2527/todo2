import React from 'react';
// to create web page eg reactdom
import ReactDOM from 'react-dom/client';
import {Home} from './component/Home'
import {About} from './component/about.js'
import {Profile} from './component/Profile.js'
import {Helloworld} from './trialcomponentsession/Helloworld'
import './index.css';
// import './Helloworld.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= "/Home" element={ <Home/>}/>
      <Route path= "/" element={ <App/>}/>
      <Route path= "/about" element={ <About/>}/>
      <Route path= "/Profile" element={ <Profile/>}/>
    </Routes>
        {/* <App /> */}
        <Helloworld/>
    </BrowserRouter>
   
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


