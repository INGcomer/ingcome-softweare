// components
import BaseLayout from "../Layout/Layout";
// icons
import DownloadIcon from '@mui/icons-material/Download';
// CSS
import './Recursos.css';

// Archivos
import canvasModeloNegocios from './Archivos/Canvas de Modelo de Negocio.pdf'
import presentacion1 from './Archivos/Presentacion 1.pdf'
import giaPlanNegocios from './Archivos/guia_plan_de_negocios.pdf'
import Osterwalder from './Archivos/Generacion de modelos de negocio-Osterwalder.pdf'


export default function Recursos() {
    return (
        <div className="Recursos">
            <BaseLayout>
                <h1 className="titulo">Recursos</h1>
                <h2 className="titulo"> Charla "La brújula para el crecimiento de tu negocio"</h2>
                <div className="recursos">
                    <div className="recurso">
                        <h3> Presentacion "La brújula para el crecimiento de tu negocio"</h3>
                        <a href={presentacion1} target="_blank" rel="noopener noreferrer" download="Presentacion 1.pdf">
                            <DownloadIcon />
                        </a>
                    </div>
                    <div className="recurso">
                        <h3> Plantilla Canvas Modelo de Negocios </h3>
                        <a href={canvasModeloNegocios} target="_blank" rel="noopener noreferrer" download="Canvas de Modelo de Negocio.pdf">
                            <DownloadIcon />
                        </a>
                    </div>
                    <div className="recurso">
                        <h3> Guía Práctica para la Elaboración de un Plan de Negocios </h3>
                        <a href={giaPlanNegocios} target="_blank" rel="noopener noreferrer" download="guia_plan_de_negocios.pdf">
                            <DownloadIcon />
                        </a>
                    </div>
                    <div className="recurso">
                        <h3> Generación de Modelos de Negocio </h3>
                        <a href={Osterwalder} target="_blank" rel="noopener noreferrer" download="Generacion de modelos de negocio-Osterwalder.pdf">
                            <DownloadIcon />
                        </a>
                    </div>

                </div>
            </BaseLayout>
        </div>
    )
}