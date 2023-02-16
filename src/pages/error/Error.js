import React from 'react';
import './error.scss';
import Header from '../../component/header/Header';

export default function Error() {
  return (
    <div className='errorPage'>
      <Header />
        <h1 className='errorPage_content_title'>404</h1>
        <p className='errorPage_content_message'>Oups! La page que vous demandez n'existe pas.</p>  
        <p className='errorPageReturn'>Retourner a la page d'accueil</p>      
      </div>
    
  );
}

