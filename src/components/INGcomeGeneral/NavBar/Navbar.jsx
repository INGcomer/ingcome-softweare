// components


// CSS
import './Navbar.css';
// IMG
import ING from './imgs/ing.png'

export default function Navbar() {
    return (
        <nav className='ingcomeGeneralNav'>
            <a href="#header" className='logo'>
                <img src={ING} alt="" />
            </a>
            <a href="#AboutUs">NOSOTROS</a>
            <a href="#Servicios">Servicios</a>
            <a href="#contacto" className='contacto'>CONTACTO</a>
        </nav>
    )
}