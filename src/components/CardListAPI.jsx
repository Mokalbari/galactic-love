import CarteCaroussel from './CarteCaroussel'
import '../styles/CardListApi.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

function CardListAPI({ filteredCharacters, onCharacterSelect }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  }

  return (
    <>
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
      <br />
      <div className="carousel">
        <Carousel responsive={responsive}>
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
        </Carousel>
      </div>
    </>
  )
}

// props: characters

export default CardListAPI
