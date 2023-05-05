import { motion } from "framer-motion"

// CSS
import './Servicios.css';
// icons
import Pencil from '@mui/icons-material/DrawOutlined';
import Gear from '@mui/icons-material/EngineeringOutlined';
import Tools from '@mui/icons-material/HandymanOutlined';
// IMGs
import people from "./IMGs/people.svg"

export default function Servicios() {
    return (
        <section id="servicios">
            <h1> ¿como podemos ayudarte? </h1>
            <div className="servicios_card_container">

                <motion.div
                    className="servicios_card"
                    initial={{ x: '500%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >


                    <div className="title diseño">
                        <h1> Diseño </h1>
                    </div>

                    <p>
                        Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o a conceptualizar y diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y tecnología para garantizar que el resultado final sea un producto innovador y de alta calidad.
                    </p>

                </motion.div>

                <motion.div
                    className="servicios_card"
                    initial={{ x: '350%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >

                {/* <div className="servicios_card"> */}

                    <div className="title desarollo">
                        <h1> Desarollo </h1>
                    </div>

                    <p>
                        Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o a conceptualizar y diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y tecnología para garantizar que el resultado final sea un producto innovador y de alta calidad.
                    </p>

                {/* </div> */}

                </motion.div>

                <motion.div
                    className="servicios_card"
                    initial={{ x: '170%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >

                {/* <div className="servicios_card"> */}

                    <div className="title soporte">
                        <h1> Soporte </h1>
                    </div>

                    <p>
                        Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o a conceptualizar y diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y tecnología para garantizar que el resultado final sea un producto innovador y de alta calidad.
                    </p>

                {/* </div> */}

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