// components
import Productos from './Productos/Productos';
// CSS
import './Servicios.css';
//imgs
import logoblanco from "./img/log blanco comprimido.png"
import Flecha_roja from './img/flexcha roja.png'



export default function Servicios() {
    return (
        <div id="Servicios">
            <div className='title'>
                <img src={Flecha_roja} alt="" />
                <h2> Nuestros Servicios </h2>
            </div>
            <p className='main_p'>Somos una empresa que abarca la faceta Estratégica, Comercial y de Desarrollo de Proyectos y Eventos, utilizando tecnología para incrementar los beneficios de estos y así potenciar su valor. </p>
            <div className="grid_container">
                
                <div className='container' id='_1'>
                    <ul>
                        <li>
                            <h3>Consultoría Estratégica y Comercial</h3>
                        </li>
                    </ul>
                    <p>Diseñamos estrategias efectivas que impulsen el crecimiento de las empresas y proyectos que deciden trabajar con nosotros. Aportamos ideas y soluciones personalizadas para optimizar sus operaciones, mejorar la competitividad y ampliar su alcance, potenciando su valor e impacto.</p>
                    {/* <a href="" className='leermas'> Leer mas</a> */}
                </div>
                <div className='container' id='_2'>
                    <ul>
                        <li>
                            <h3>Desarrollo y Gestión de Proyectos</h3>
                        </li>
                    </ul>
                    <p>Convertimos ideas en realidades tangibles. Nuestro equipo altamente capacitado dirige la planificación, ejecución y supervisión de proyectos, garantizando su éxito y alineación con los objetivos de su organización. Al mismo tiempo, realizamos una sinergia con nuestros demás servicios para potenciar los proyectos en los cuales nos involucramos, incrementando también  su valor e impacto.</p>
                </div>
                <div className='container' id='_3'>
                    <ul>
                        <li>
                            <h3>Organización de Eventos</h3>
                        </li>
                    </ul>
                    <p>De nuestro servicio de Desarrollo y Gestión de Proyectos, se desprende de manera diferenciada la Organización de Eventos. Desde la conceptualización hasta la ejecución, nuestra experiencia en organización de eventos garantiza que cada ocasión sea única y poderosa. Orientado especialmente a eventos de índole Académico y Científico (Congresos y Jornadas), abarcamos todas las facetas que competen a un evento completo, desde su Gestión General, Logística, Financiera y Técnica, hasta la faceta Comercial, manteniendo la premisa de potenciar el valor e impacto de los mismos.</p>
                </div>
                <div className='container' id='_4'>
                    <ul>
                        <li>
                            <h3>Desarrollo de Software</h3>
                        </li>
                    </ul>

                    <p>La tecnología impulsa el mundo actual y en INGcome, creamos soluciones de software personalizadas que mejoran la eficiencia y la innovación en las empresas y proyectos de los cuales formamos parte. Nuestro enfoque tecnológico impulsa el valor de sus proyectos y actividades comerciales, cerrando el ciclo sinérgico de nuestro Portfolio de Servicios.</p>
                </div>
                <div className='grid_logo_container'>
                    <div className="circle">
                        <img src={logoblanco} alt="" />
                    </div>
                </div>
                <div className="gloss" />
            </div>
            <Productos/>
        </div>
    )
}