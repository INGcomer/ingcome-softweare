// components
import BaseLayout from "../Layout/Layout";
import Header from "./Header/Header"
import AboutUs from "./AboutUs/AboutUs";
import Servicios from "./Servicios/Servicios";
import Contacto from "./Contacto/Contacto";

// CSS
import './Landing.css';


export default function Landing() {
    return (
        <div className="INGcome">
            <BaseLayout>
            <Header />
            <AboutUs />
            <Servicios />
            <Contacto/>
            </BaseLayout>
        </div>
    )
}