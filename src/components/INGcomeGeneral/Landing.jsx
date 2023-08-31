// components
import Navbar from "./NavBar/Navbar";
import Header from "./Header/Header"
import AboutUs from "./AboutUs/AboutUs";
import Servicios from "./Servicios/Servicios";
import Contacto from "./Contacto/Contacto";
import Footer from "./Footer/Footer"

// CSS
import './Landing.css';


export default function Landing() {
    return (
        <div className="INGcome">
            <Navbar />
            <Header />
            <AboutUs />
            <Servicios />
            <Contacto/>
            <Footer/>
        </div>
    )
}