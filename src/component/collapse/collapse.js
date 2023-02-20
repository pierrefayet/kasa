import React, { useState } from 'react';
import './collapse.scss';


export default function Collapse({ title, content, arrowImage }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={handleHeaderClick}>
        <h2>{title}</h2>
        <span className={`collapse-arrow ${isOpen ? 'open' : ''}`}>
          <img src={arrowImage} alt="Arrow" className={isOpen ? 'rotate' : ''} />
        </span>
      </div>
      {isOpen && (
      <div className="collapse-text">
        <div className="collapse-content">{content}</div>
      </div>
    )}
    </div>
  );
}





