import './App.css'

import Header from './components/Header'
import CardListAPI from './components/CardListAPI'
import BurgerMenu from './components/BurgerMenu'
import Menu from './components/Menu'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'
import { element } from 'prop-types'

function App() {
  const [character, setCharacter] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: 'Default Name',
    homeworld: 'Default ',
    cybernetics: 'Default ',
    image:
      'https://w7.pngwing.com/pngs/116/192/png-transparent-jabba-the-hutt-c-3po-sideshow-collectibles-youtube-star-wars-youtube-war-villain-16-scale-modeling-thumbnail.png',
  })

  const [filterGender, setFilterGender] = useState('')
  const [filterSpecies, setFilterSpecies] = useState('')
  const [filterHomeworld, setFilterHomeworld] = useState('')
  const [filterCybernetics, setFilterCybernetics] = useState('')
  const [filterAffiliations, setFilterAffiliations] = useState('')

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
  const handleCharacterSelect = character => {
    setSelectedCharacter(character)
  }

  const filters = {
    gender: filterGender,
    homeworld: filterHomeworld,
    species: filterSpecies,
    cybernetics: filterCybernetics,
    affiliations: filterAffiliations,
  }

  const filteredCharacters = []

  const filterFunk = character => {
    // Check if the character matches all the filters
    if (
      (character.gender === filters.gender || filters.gender === '') &&
      (character.homeworld === filters.homeworld || filters.homeworld === '') &&
      (character.species === filters.species || filters.species === '') &&
      (character.cybernetics === filters.cybernetics ||
        filters.cybernetics === '') &&
      (filters.affiliations === '' ||
        character.affiliations.some(aff => aff === filters.affiliations))
    ) {
      filteredCharacters.push(character)
    }
  }

  character.forEach(element => filterFunk(element))
  console.log(filteredCharacters)

  return (
    <>
      <div className="grid">
        <Header />
        <Menu
          filteredCharacters={filteredCharacters}
          setFilterGender={setFilterGender}
          setFilterSpecies={setFilterSpecies}
          setFilterHomeworld={setFilterHomeworld}
          setFilterCybernetics={setFilterCybernetics}
          setFilterAffiliations={setFilterAffiliations}
        />
        {selectedCharacter && (
          <Hero
            name={selectedCharacter.name}
            homeworld={selectedCharacter.homeworld}
            cybernetics={selectedCharacter.cybernetics}
            image={selectedCharacter.image}
          />
        )}
        <CardListAPI
          filteredCharacters={filteredCharacters}
          onCharacterSelect={handleCharacterSelect}
        />
      </div>
    </>
  )
}

export default App
