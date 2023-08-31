// components

// CSS
import './Header.css';
// img
import fondo_header from './imgs/fondo_header.jpg'
import I_lineas from "./imgs/I lineas.png"
import LogoBlanco from "./imgs/logo blanco.png"


export default function Header() {
    return (
        <div id="header">
            {/* <img src={fondo_header} alt="" className="fondo_header"/> */}

            <div className='loading'>
                <h1> Elevamos el valor de tus ideas </h1>
                <div className='sombra' />
                <img src={LogoBlanco} alt="" />
                {/* <img className='lineas' src={I_lineas} alt="" /> */}
                {/* <div className="gloss" /> */}
            </div>

            <h1> Elevamos el valor de tus ideas </h1>
            <div className='sombra'/>
            <img src={LogoBlanco} alt="" />
            {/* <img className='lineas' src={I_lineas} alt="" /> */}
            <div className="gloss" />
        </div>
    )
}