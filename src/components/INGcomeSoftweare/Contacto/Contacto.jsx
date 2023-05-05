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
                    {/* <div className='email'> */}
                    <a href="">
                        <AlternateEmailIcon />
                    </a>
                    email
                    {/* </div> */}

                </motion.div>
                <motion.div
                    className='linkedin'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className='linkedin'> */}
                    <a href="">
                        <LinkedInIcon />
                    </a>
                    linkedin
                    {/* </div> */}
                </motion.div>
                <motion.div
                    className='instagram'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className='instagram'> */}
                    <a href="">
                        <InstagramIcon />
                    </a>
                    instagram
                    {/* </div> */}
                </motion.div>
                <motion.div
                    className='telefono'
                    initial={{ y: '100%' }}
                    whileInView={{ y: '0%' }}
                    transition={{ duration: 0.5 }}
                >
                    {/* <div className='telefono'> */}

                    <a href="">
                        <LocalPhoneIcon />
                    </a>
                    2615163613
                    
                    {/* </div> */}
                </motion.div>
            </div>
        </section>
    )
}