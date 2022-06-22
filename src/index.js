import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home';
import Footer from './Componentes/Footer';
import User from './Pages/user';
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs";
import { FaExclamationTriangle } from "react-icons/fa";
import Login from './Pages/Login';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <>
    <Login/>
    <Home/>
    <Footer/>
    </>
    {/* <User/> */}

   
  </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

