import CarteCaroussel from './CarteCaroussel'
import '../styles/CardListApi.css'

function CardListAPI({ filteredCharacters, onCharacterSelect }) {
  return (
    <div className="carte-liste cards">
      {filteredCharacters.map(character => (
        <CarteCaroussel
          key={character.name}
          image={character.image}
          name={character.name}
          hairColor={character.hairColor}
          eyeColor={character.eyeColor}
          species={character.species}
          homeworld={character.homeworld}
          onClick={() => onCharacterSelect(character)}
        />
      ))}
    </div>
  )
}

// props: characters

export default CardListAPI
