import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Rotas from './Routes';
import Footer from './Componentes/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Rotas/>
    <Footer/>
    
  </React.StrictMode>
  
);


