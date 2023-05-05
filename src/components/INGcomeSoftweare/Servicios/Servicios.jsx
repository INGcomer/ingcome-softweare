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
            <div className='servicios_container'>
                <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >

                    <div className='servicios_card diseño'>
                        <div className='icon'>
                            <Pencil />
                        </div>
                        <div className='text'>
                            <h2> Diseño </h2>
                            <p> Durante la fase de descubrimiento y diseño, nuestro objetivo es ayudar a nuestros clientes a identificar oportunidades de mejora en sus procesos o a conceptualizar y diseñar un producto. Nos enfocamos en tres aspectos fundamentales: funcionalidad, usabilidad y escalabilidad para garantizar que el resultado final sea un producto innovador y de alta calidad. </p>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='servicios_card desarollo'>
                        <div className='icon'>
                            <Gear />
                        </div>
                        <div className='text'>
                            <h2> Desarollo </h2>
                            <p> diseñamos muy bien, lo prometo </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className='servicios_card soporte'>
                        <div className='icon'>
                            <Tools />
                        </div>
                        <div className='text'>
                            <h2> Soporte </h2>
                            <p> diseñamos muy bien, lo prometo </p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <img src={people} alt="" />
        </section>
    )
}