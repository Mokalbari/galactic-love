import CarteCaroussel from './CarteCaroussel'
import '../styles/CardListApi.css'

function CardListAPI({ filteredCharacters, onCharacterSelect }) {
  return (
    <div className="carte-liste">
      {filteredCharacters.map(character => (
        <CarteCaroussel
          key={character.name}
          image={character.image}
          name={character.name}
          onClick={() => onCharacterSelect(character)}
        />
      ))}
    </div>
  )
}

// props: characters

export default CardListAPI
