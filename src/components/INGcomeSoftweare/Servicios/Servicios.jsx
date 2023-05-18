import { motion } from "framer-motion"

// CSS
import './Servicios.css';
// icons
import Pencil from '@mui/icons-material/DrawOutlined';
import Gear from '@mui/icons-material/EngineeringOutlined';
import Tools from '@mui/icons-material/HandymanOutlined';
// IMGs
import { useState } from "react";

export default function Servicios() {

    const [posicion_inicial_animaciones, set_posicion_inicial_animaciones] = useState("300px");
    
    return (
        <section id="servicios">
            <h1> ¿como podemos ayudarte? </h1>
            <div className="servicios_card_container">
                <motion.div
                    className="servicios_card"
                    initial={{ x:  posicion_inicial_animaciones}}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="title diseño">
                        <h1> Diseño </h1>
                    </div>

                 <p>
                        Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y escalabilidad para garantizar que el resultado final de alta calidad.
                    </p>
                </motion.div>

                <motion.div
                    className="servicios_card"
                    initial={{ x:  posicion_inicial_animaciones}}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="title desarollo">
                        <h1> Desarollo </h1>
                    </div>

                    <p>
                    Nuestro equipo de desarrolladores altamente capacitados utiliza las últimas herramientas y tecnologías para diseñar y crear soluciones de software a medida. Ya sea que necesite una aplicación web, un sistema de gestión de bases de datos o una aplicación móvil, nos comprometemos a ofrecer soluciones de alta calidad y funcionales.
                    </p>
                </motion.div>

                <motion.div
                    className="servicios_card"
                    initial={{ x:  posicion_inicial_animaciones}}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="title soporte">
                        <h1> Soporte </h1>
                    </div>

                    <p>
                    Nuestra solución de software implementada viene respaldada por un servicio de soporte especializado en mantenimiento y evolución. Nuestro dedicado equipo de profesionales está disponible para brindar asistencia, resolver cualquier incidente y garantizar el continuo crecimiento de la solución.
                    </p>
                </motion.div>
            </div>

            <div className="servicios_icon_container">
                <Pencil />
                <Gear />
                <Tools />
            </div>
        </section>
    )
}