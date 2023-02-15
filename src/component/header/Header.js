import "./header.scss"
import logo from '../../asset/LOGO.png'
import Navbar from '../navbar/Navbar'

export default function Header() {
    return (
        <header>
            <div>
                <img src={logo} alt="logo Kasa, site de location d'appartement"></img>
            </div>
            <Navbar/>
        </header>
    )
}

