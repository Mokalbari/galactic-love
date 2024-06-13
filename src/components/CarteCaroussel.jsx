import jabba from "../assets/Jabba-The-Hutt.png"
import "../styles/CarteCaroussel.css"

const CarteCaroussel = (props) =>{
    return(
        <div className="carte-caroussel">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <div id="affiliation">
                {/* <p>affiliation</p>
                <ul>
                    <li>les méchants</li>
                    <li>la mafia</li>
                    <li>la gauche communiste</li>
                </ul> */}
            </div>
        </div>
    )
}

export default CarteCaroussel