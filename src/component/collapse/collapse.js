import React, { useState } from 'react';
import './collapse.scss';
import '../../sass/base/setting.scss';
import Vector from '../../asset/VectorCollapse.png';

export default function Collapse({ title, content, arrowImage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container__collapse">
      <div className='header__collapse'>
        <h3>{title}</h3>
        <img src={arrowImage= Vector} alt="Arrow" className={isOpen ? 'rotate' : ''} onClick={handleHeaderClick}/>
      </div>
      <p className='collapse-arrow'></p>
      
      <div className={`collapse-content-wrapper ${isOpen ? 'open' : 'close'}`} >
        {isOpen && <div className="collapse-text">{content}</div>}
      </div>
    </div>

  );
}

