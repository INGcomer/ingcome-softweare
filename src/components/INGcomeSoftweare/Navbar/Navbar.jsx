// STYLES
import './Navbar.css';
// IMGs
import I_income from './I de income.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
           <a href="#header" className='icono'>
           <div className="logo">
                <img src={I_income} alt="INGcome logo" />
            </div>
            </a>
            <div className="links">
                <a href="#header" className='navegation'> Inicio </a>
                <a href="#servicios" className='navegation'> Servicios </a>
                <a href="#porfolio" className='navegation'> Porfolio </a>
                <a href="#contacto" className='contacto'> CONTACTANOS </a>
            </div>
        </nav>
    )
}