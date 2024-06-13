import { useEffect, useState } from 'react'
import CarteCaroussel from './CarteCaroussel'

function CardListAPI() {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        'https://miadil.github.io/starwars-api/api/all.json',
      )
      const data = await response.json()
      console.log(data)
      setCharacter(data)
    }
    fetchAPI()
  }, [])

  return (<div>
    {character.map(element =>
      <CarteCaroussel key={element.id} {...element} />
    )}
  </div>)
}

export default CardListAPI
