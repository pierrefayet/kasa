import React from 'react';
import './error.scss';
import Header from '../../component/header/Header';
import{Link} from "react-router-dom";
export default function Error() {
  return (
    <div className='errorPage'>
      <Header />
        <h1 className='errorPage_content-title'>404</h1>
        <p className='errorPage_content-message'>Oups! La page que vous demandez n'existe pas.</p>  
        <Link to="/" className='errorPageReturn'> Retourner a la page d'accueil</Link>      
      </div>
    
  );
}

