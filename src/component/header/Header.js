import "./header.scss"
import logo from '../../asset/LOGO.png'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="_logo">
                <img src={logo} alt="logo Kasa, site de location d'appartement"></img>
            </div>
            <nav className="_nav">
                <Link to={`/`} className="housing_card-link">  
                    <div className="link">Accueil</div>
                </Link> 
                <Link to={`/about/About`} className="housing_card-link">     
                    <div className="link">A Propos</div>
                </Link>    
            </nav>
        </header>
    );
}

