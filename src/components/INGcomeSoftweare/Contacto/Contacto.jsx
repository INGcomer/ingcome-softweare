import { motion } from "framer-motion"

// icons
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

// CSS
import './Contacto.css';

export default function Contacto() {
    return (
        <section id="contacto">
            <h1> Ponete en contacto! </h1>
            <div className='contact_card'>
                <motion.div
                    className='email'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="mailto:contacto@ingcomer.com">
                        <AlternateEmailIcon />
                    </a>
                    email
                </motion.div>
                <motion.div
                    className='linkedin'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="https://www.linkedin.com/company/ingcomer/">
                        <LinkedInIcon />
                    </a>
                    linkedin
                </motion.div>
                <motion.div
                    className='instagram'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="https://www.instagram.com/c.ingcomer/">
                        <InstagramIcon />
                    </a>
                    instagram
                </motion.div>
                <motion.div
                    className='telefono'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="https://wa.me/542615163613">
                        <LocalPhoneIcon />
                    </a>
                    2615163613
                </motion.div>
            </div>
        </section>
    )
}