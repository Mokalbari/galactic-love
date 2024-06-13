import CarteCaroussel from './CarteCaroussel'
import '../styles/CardListApi.css'

function CardListAPI({ filteredCharacters }) {
  return (
    <div className="carte-liste">
      {filteredCharacters.map(element => (
        <CarteCaroussel key={element.id} {...element} />
      ))}
    </div>
  )
}

export default CardListAPI
