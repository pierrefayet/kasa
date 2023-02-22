import './carrousel.scss';
import leftArrow from '../../asset/VectorLeft.png';
import rightArrow from '../../asset/VectorRight.png';
import { useState } from 'react';

export default function Carrousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // Check length of array
    const checkLengthArray = pictures.length > 1;

    return (
        <div className="carrousel-container">
            <img className="carrousel-image" src={pictures[currentImageIndex]} alt="logement" />
            {checkLengthArray && (
                <div className="carrousel-arrows">
                    <div className="carrousel-arrow-left" onClick={() => setCurrentImageIndex(currentImageIndex > 0 ? currentImageIndex - 1 : pictures.length - 1)}>
                        <img src={leftArrow} alt="Fleche gauche" />
                    </div>
                    <div className="carrousel-counter">{currentImageIndex + 1}/{pictures.length}</div>
                    <div className="carrousel-arrow-right" onClick={() => setCurrentImageIndex(currentImageIndex < pictures.length - 1 ? currentImageIndex + 1 : 0)}>
                        <img src={rightArrow} alt="Fleche droite" />
                    </div>
                </div>
            )}
        </div>
    );
}