import jabba from "../assets/Jabba-The-Hutt.png"
import "../styles/CarteCaroussel.css"

const CarteCaroussel = ({image, name}) =>{
    return(
        <div className="carte-caroussel">
            <img src={image} alt={name} />
            <div className="wrapper">
                <h3>{name}</h3>
                <div id="affiliation">
                    <p>affiliation</p>
                    <ul>
                        <li>les méchants</li>
                        <li>la mafia</li>
                        <li>la gauche communiste</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CarteCaroussel