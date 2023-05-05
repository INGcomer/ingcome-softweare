// STYLES
import './Navbar.css';
// IMGs
import I_income from './I de income.svg'

export default function Navbar() {
    return (
        <nav className="navbar">
           {/* <div> */}
           <div className="logo">
                <img src={I_income} alt="INGcome logo" />
            </div>
            <div className="links">
                <a href="#header" className='navegation'> header </a>
                <a href="#servicios" className='navegation'> servicios </a>
                <a href="#porfolio" className='navegation'> porfolio </a>
                <a href="#contacto" className='contacto'> CONTACTANOS </a>
            </div>
           {/* </div> */}
        </nav>
    )
}