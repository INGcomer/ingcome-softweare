import { motion } from "framer-motion"

// STYLES
import './Porfolio.css';

// IMGs
import shape from "./imgs/blob.svg"
import mockups from "./imgs/nav mas income.png"
import SISA from "./imgs/SISA.png"
import CAEII from "./imgs/CAEII.png"
import WISSE from "./imgs/WISSE.png"

export default function Porfolio() {
    return (
        <section id="porfolio">
            <h1> Algunos de nuestros projectos </h1>

            <div className="cards_container">
                <div className="project_card">
                    <div className="text">
                        <h2> SISA </h2>
                        <p> esto es SISA </p>
                    </div>

                    <a href="https://sisa-frontend.vercel.app/">
                        <img src={SISA} alt="" />
                    </a>

                </div>

                <div className="project_card">
                    <div className="text">
                        <h2> CAEII </h2>
                        <p> esto es CAEII </p>
                    </div>

                    <a href="https://caeii-2022.vercel.app/">
                        <img src={CAEII} alt="" />
                    </a>

                </div>
                <div className="project_card">
                    <div className="text">
                        <h2> WISSE </h2>
                        <p> esto es WISSE </p>
                    </div>

                    <a href="https://nasa-space-apps-2022.github.io/W.I.S.S.E/">
                        <img src={WISSE} alt="" />
                    </a>
                </div>


            </div>
            <img src={mockups} alt="" className="mockups" />
            <img src={shape} alt="" className="fondo_projectos" />
        </section>
    )
}