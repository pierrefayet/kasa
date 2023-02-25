import React from 'react';
import './error.scss';
import '../../sass/base/setting.scss';
import Header from '../../component/header/Header';
import{ Link } from "react-router-dom";
import { rootPath } from '../../routes';

export default function ErrorPage() {
  return (
    <div className='errorpage'>
      <Header />
      <div className='errorPage__content'>
        <h1 className='errorPage__content-title'>404</h1>
        <p className='errorPage__content-message'>Oups! La page que vous demandez n'existe pas.</p>  
        <Link to={rootPath} className='errorPage__return'> Retourner à la page d'accueil</Link>      
      </div>
    </div>
  );
}

