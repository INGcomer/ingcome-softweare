// components
import BaseLayout from "../Layout/Layout";
// icons
import DownloadIcon from '@mui/icons-material/Download';
// CSS
import './Recursos.css';

// Archivos
import canvasModeloNegocios from './Archivos/Canvas de Modelo de Negocio.pdf'


export default function Recursos() {
    return (
        <div className="Recursos">
            <BaseLayout>
                <h1 className="titulo">Recursos</h1>
                <div className="recursos">
                    <div className="recurso">
                        <h2> Plantilla Canvas Modelo de Negocios </h2>
                        <a href={canvasModeloNegocios} target="_blank" rel="noopener noreferrer" download="Canvas de Modelo de Negocio.pdf">
                            <DownloadIcon />
                        </a>
                    </div>
                    <div className="recurso">
                        <h2> Presentacion "La brújula para el crecimiento de tu negocio"</h2>
                        <a href="">
                            <DownloadIcon />
                        </a>
                    </div>
                </div>
            </BaseLayout>
        </div>
    )
}