import jabba from "../assets/Jabba-The-Hutt.png"
import "../styles/CarteCaroussel.css"

const CarteCaroussel = () =>{
    return(
        <div className="carte-caroussel">
            <img src={jabba} alt="" />
            <h3>jabba, le bg</h3>
            <div id="affiliation">
                <p>affiliation</p>
                <ul>
                    <li>les méchants</li>
                    <li>la mafia</li>
                    <li>la gauche communiste</li>
                </ul>
            </div>
        </div>
    )
}

export default CarteCaroussel