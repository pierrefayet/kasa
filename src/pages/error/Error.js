import React from 'react';
import './error.scss';
import Header from '../../component/header/Header';
import{Link} from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='errorpage'>
      <Header />
        <h1 className='errorpage__content-title'>404</h1>
        <p className='errorpage__content-message'>Oups! La page que vous demandez n'existe pas.</p>  
        <Link to="/" className='errorpage__return'> Retourner à la page d'accueil</Link>      
      </div>
  );
}

