import { useEffect, useState } from 'react'
import CarteCaroussel from './CarteCaroussel'
import '../styles/CardListApi.css'


function CardListAPI({ characters, onCharacterSelect }) {
  
  return (
    <div className="carte-liste">
      {characters.map((character) => (
        <CarteCaroussel
          key={character.name}
          image={character.image}
          name={character.name}
          onClick={() => onCharacterSelect(character)}
        />
      ))}
    </div>
  );
}




export default CardListAPI


