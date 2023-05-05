import { motion } from "framer-motion"

// STYLES
import './Header.css';

// IMGs
import logo_grande from './imgs/logo.svg'
// import I_income from './imgs/I de income.svg
import I_income from './imgs/I de income gris.svg'

export default function Header() {
    return (
        <section id="header">
            <motion.div
                className='izquierda'
                initial={{ x: '-100%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.5 }}
            >

                <div className='glass_card'>
                    <img src={logo_grande} alt="income logo" />
                    <p> awesome words </p>
                    <a href="" className='contacto'> CONTACTANOS </a>
                </div>

            </motion.div>

            <motion.div
                className='derecha'
                initial={{ x: '80%' }}
                whileInView={{ x: '0%' }}
                transition={{ duration: 0.5 }}
            >

                <img src={I_income} alt="I de income" className='icono_fondo' />

            </motion.div>

        </section>
    )
}