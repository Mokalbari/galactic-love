import './App.css'

import Header from './components/Header'
import CardListAPI from './components/CardListAPI'
import BurgerMenu from './components/BurgerMenu'
import Menu from './components/Menu'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'


function App() {
  const [characters, setCharacters] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: "Default Name",
    homeworld: "Default ",
    cybernetics: "Default ",
    image: "https://w7.pngwing.com/pngs/116/192/png-transparent-jabba-the-hutt-c-3po-sideshow-collectibles-youtube-star-wars-youtube-war-villain-16-scale-modeling-thumbnail.png" 
  });

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        'https://miadil.github.io/starwars-api/api/all.json',
      )
      const data = await response.json()
      console.log(data)
      setCharacters(data)
    }
    fetchAPI()
  }, [])

  const handleCharacterSelect = (character) => {
    setSelectedCharacter(character)
  }

  return (
    <>
      <Header />
      <Menu />
      {selectedCharacter && (
        <Hero
          name={selectedCharacter.name}
          homeworld={selectedCharacter.homeworld}
          cybernetics={selectedCharacter.cybernetics}
          image={selectedCharacter.image}
        />
      )}
      <CardListAPI characters={characters} onCharacterSelect={handleCharacterSelect} />
    </>
  )
}


export default App
