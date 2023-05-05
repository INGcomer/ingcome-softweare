// components
import Navbar from "./Navbar/Navbar.jsx"
import Header from "./Header/Header.jsx"
import Servicios from "./Servicios/Servicios.jsx"
import Porfolio from "./Porfolio/Porfolio.jsx"
import Contacto from "./Contacto/Contacto.jsx"

// CSS
import './landingSoft.css';


export default function LandingINGcomeSoftweare() {
    return (
        <div className="INGsoft">
            <Navbar/>
            <Header/>
            <Servicios/>
            <Porfolio/>
            <Contacto/>

            <div className="prueba">

                <div className="title">
                    <h1> title </h1>
                </div>

                <p>
                    Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o a conceptualizar y diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y tecnología para garantizar que el resultado final sea un producto innovador y de alta calidad.
                </p>

            </div>

            <div className="prueba2">

                <div className="title">
                    <h1> title </h1>
                </div>

                <p>
                    Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o a conceptualizar y diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y tecnología para garantizar que el resultado final sea un producto innovador y de alta calidad.
                </p>

            </div>
        </div>
    )
}