import "./header.scss"
import logo from '../../asset/LOGO.png'


export default function Header() {
    return (
        <header className="header">
            <div className="_logo">
                <img src={logo} alt="logo Kasa, site de location d'appartement"></img>
            </div>
            <nav className="_nav">
                <div className="link">Accueil</div>
                <div className="link">A Propos</div>
            </nav>
        </header>
    );
}

