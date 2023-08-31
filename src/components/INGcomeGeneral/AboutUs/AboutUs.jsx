// components
import Confian from '../Confian/Confian';
// CSS
import './AboutUs.css';
//imgs
import Flecha_roja from "./img/flexcha roja.png"
import saludo from "./img/Ingcome.png"
// import ing from "./img/ing.png"
import ing from "./img/ing blanco.png"
import Augusto from './img/equipo/Augusto.jpg'
import Lucas from './img/equipo/Lucas.jpg'
import Santiago from './img/equipo/Santiago.jpg'
import Tomas from './img/equipo/Tomas.jpg'
import alexis from './img/equipo/Alexis.jpg'




export default function AboutUs() {
    return (
        <div id="AboutUs">
            <div className='title'>
                <img src={Flecha_roja} alt="" />
                <h2> Sobre Nosotros </h2>
            </div>
            <p>
                <b>
                    Desde INGcomer nos enfocamos en explotar su potencial comercial, así poder desarrollar mejores vínculos de mercado, aumentar beneficios, generar nuevas oportunidades de negocios y despejar el camino hacia el crecimiento económico.
                </b>
                <br />
                Aportamos tanto a empresas privadas como a ONG’s, la posibilidad de visibilizar y prestar todo el valor que tengan para ofrecer, a través del desarrollo de su propuesta comercial, de gestionar relaciones estratégicas de mercado, armado de plan de negocios y revalidación de su propuesta de valor. Gracias a nuestro trabajo, diferentes empresas y organizaciones logran el desarrollo y obtención de financiamiento de diferentes proyectos.
            </p>
            <div className='objetivos'>
                <h3>Objetivos</h3>
                <div className='img'>
                    <img src={saludo} alt="" />
                </div>
                <div className='conteiner' id='_1'>
                    <h4>Visión</h4>
                    <p>
                    INGcome trabaja para ser la compañía de mayor influencia en la región,
                     contribuyendo en un cambio social y de mercado que incremente en gran medida el bienestar económico y social, 
                     mediante facilitarles a las grandes ideas florecer, y a los grandes proyectos a explotar su potencial.
                    </p>
                </div>
                <div className='conteiner' id='_2'>
                    <h4>Misión</h4>
                    <p>
                    Ofrecemos soluciones que permiten capitalizar al máximo el valor que los proyectos y organizaciones tienen para aportar, 
                    apoyándonos en la visión estratégica para fortalecer su propuesta comercial, 
                    así poder fomentar su impacto y alcanzar los objetivos propuestos. 
                    Estamos detrás de Proyectos de todo tipo, ONG's y Empresas Privadas.
                    </p>
                </div>
                <div className='conteiner' id='_3'>
                    <h4>Valores</h4>
                    <p>
                    Nuestro objetivo es crear una cultura organizacional donde se persiga el compromiso con la calidad, 
                    fomentando la comunicación abierta, priorizando la flexibilidad para adaptarnos de manera proactiva a los cambios,
                     y fomentando el crecimiento permanente de sus miembros, el aprendizaje constante y el desarrollo de nuevos talentos. 
                     Creemos fielmente que con el trabajo necesario, los miembros de INGcome pueden desarrollarse tanto profesionalmente, 
                     como también convertirse en mejores personas. Así,
                     fortalecemos nuestro éxito presente y futuro a través de la responsabilidad colectiva y la innovación colaborativa.
                    </p>
                </div>
                <div className='conteiner' id='_4'>
                    <img src={ing} alt="" />
                </div>
            </div>
            <div className='equipo'>
                <h3>El equipo</h3>
                <p>Formado por ingenieros experimentados en la Gestión de Proyectos, Desarrollo de Eventos a nivel nacional, Consultoría y Gestión Comercial de Eventos, Empresas y ONG's. Con excelentes resultados en el desarrollo de los mismos que consolidan una garantía en la calidad de nuestro servicio.</p>

                <div className='container'>
                    <a href="https://www.linkedin.com/in/alexis-parada-beltran-911a03170/">
                        <div className='mienbro'>
                            <div className='img'>
                                <img src={alexis} alt="" />
                            </div>
                            <div className="texto">
                                <span> <strong> Alexis Parada </strong> </span>
                                <small> INGENIERÍA INDUSTRIAL </small>
                                <small> UM </small>
                            </div>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/lucas-o-donnell-riba-6289791aa/">
                        <div className='mienbro'>
                            <div className='img'>
                                <img src={Lucas} alt="" />
                            </div>
                            <div className="texto">
                                <span> <strong> Lucas O'Donnell </strong> </span>
                                <small> INGENIERÍA INDUSTRIAL </small>
                                <small> UM </small>
                            </div>
                        </div>
                    </a>


                    <a href="https://www.linkedin.com/in/tomas-garignani-a91312219/">
                        <div className='mienbro'>
                            <div className='img'>
                                <img src={Tomas} alt="" />
                            </div>
                            <div className="texto">
                                <span> <strong> Tomas Garignani </strong> </span>
                                <small> INGENIERÍA INDUSTRIAL </small>
                                <small> UNCUYO </small>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/santiagorusso/">
                        <div className='mienbro'>
                            <div className='img'>
                                <img src={Santiago} alt="" />
                            </div>
                            <div className="texto">
                                <span> <strong> Santiago Russó </strong> </span>
                                <small> INGENIERÍA INDUSTRIAL </small>
                                <small> UNCUYO </small>
                            </div>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/augusto-nevio-antonelli-pol/">
                        <div className='mienbro'>
                            <div className='img'>
                                <img src={Augusto} alt="" />
                            </div>
                            <div className="texto">
                                <span> <strong> Augusto Antonelli </strong> </span>
                                <small> INGENIERÍA QUIMICA </small>
                                <small> UTN </small>
                            </div>
                        </div>
                    </a>
                </div>







            </div>

            <Confian/>
        </div>
    )
}