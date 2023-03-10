import './HousingCard.scss';
import { Link } from 'react-router-dom';
import {buildAccomodationPath} from '../../routes';

export default function HousingCard({ item }) {
    const { id,title, cover} = item;

    return (
        <div className="housing_card">
            <Link to={buildAccomodationPath(id)} className="housing_card-link">
                <img className="housing_card-cover" src={cover} alt={title} />
                <div className="housing_card-content">
                    <h2 className="housing_card-title">{title}</h2>
                </div>
            </Link>    
        </div>
    );
}