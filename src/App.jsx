import './App.css'
import jaba from './assets/Jabba-The-Hutt.png'
import Header from './components/Header'
import CardListAPI from './components/CardListAPI'
import BurgerMenu from './components/BurgerMenu'
import Menu from './components/Menu'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'
import { element } from 'prop-types'
import Loading from './components/Loading'
import Messagerie from './components/Messagerie'

function App() {
  const [character, setCharacter] = useState([])
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: 'Jaba',
    homeworld: 'Tatooine',
    cybernetics: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    image: jaba,
  })

  const [filterGender, setFilterGender] = useState('')
  const [filterSpecies, setFilterSpecies] = useState('')
  const [filterHomeworld, setFilterHomeworld] = useState('')
  const [filterCybernetics, setFilterCybernetics] = useState('')
  const [filterAffiliations, setFilterAffiliations] = useState('')
  const [loading, setLoading] = useState(true) // Ajouter l'état de chargement

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        'https://miadil.github.io/starwars-api/api/all.json',
      )
      const data = await response.json()
      console.log(data)
      setCharacter(data)
      setLoading(false) // Arrêter le chargement une fois les données récupérées
    }

    setTimeout(() => {
      fetchAPI()
    }, 4000) // Simulez un délai de chargement de 3 secondes
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

  for (const element of character) {
    filterFunk(element)
  }
  console.log(filteredCharacters)

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <div className="grid">
        <Header />
        <Messagerie selectedCharacter={selectedCharacter} />
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
