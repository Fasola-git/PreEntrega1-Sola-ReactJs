import CartWidget from "./CartWidget"
import LogotipoGradient from '../img/Logotipo Gradient.png'
import LogotipoBlack from '../img/Logotipo Black.png'
export default function NavaBar(){

    return(
        <header id="Header_merch">
            <nav>
                <div className="Icono" id="Fade">
                <a href="./pagina_principal.html"><img src={LogotipoGradient} alt="Santi Saracho Icono" ></img></a>
                <a href="./pagina_principal.html"><img src={LogotipoBlack} alt="Santi Saracho Icono" className="top"></img></a>
                </div>
            <ul>
                <li><a href="../pages/pagina_principal.html">Inicio</a></li>
                <li><a href="../pages/tendencias.html">Ofertas Semanales</a></li>
                <li><a href="../pages/beats.html">Beats</a></li>
                <li><a href="../pages/merch.html">Merchandising</a></li>
                <li><a href="../pages/produccion.html">Contactanos</a></li>
                <li>
                    <CartWidget></CartWidget>
                </li>
            </ul>
            </nav>
        </header>
    )
}