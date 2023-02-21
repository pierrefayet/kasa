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
        <img src={arrowImage= Vector} alt="Arrow" className={isOpen ? 'rotate' : 'close'} onClick={handleHeaderClick}/>
      </div>
      <p className={`collapse-arrow ${isOpen ? 'open' : 'close'}`}></p>
      
      <div className="collapse-content-wrapper"  style={{ backgroundColor: !isOpen ? '#fff' : '#f6f6f6' }}>
        {isOpen && <div className="collapse-text">{content}</div>}
      </div>
    </div>

  );
}

