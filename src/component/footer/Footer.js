import "./footer.scss"
import Logo from '../../asset/logo_footer.png'

export default function Footer() {
    return (
        <footer className='footer'>
            <img src={Logo} alt="logo Kasa, site de location d'appartement"></img>
            <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}