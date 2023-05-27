// components
import Navbar from "./Navbar/Navbar.jsx"
import Header from "./Header/Header.jsx"
import Servicios from "./Servicios/Servicios.jsx"
import Porfolio from "./Porfolio/Porfolio.jsx"
import Contacto from "./Contacto/Contacto.jsx"
import Footer from "./Footer/Footer.jsx"

// CSS
import './landingSoft.css';


export default function LandingINGcomeSoftweare() {
    return (
        <div className="INGsoft">
            <Navbar />
            <Header />
            <Servicios />
            <Porfolio />
            <Contacto />
            <Footer/>
        </div>
    )
}