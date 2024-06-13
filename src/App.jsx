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
  const [filterGender, setFilterGender] = useState('')
  const [filterSpecies, setFilterSpecies] = useState('')
  const [filterHomeworld, setFilterHomeworld] = useState('')
  const [filterCybernetics, setFilterCybernetics] = useState('')
  const [filterAffiliations, setFilterAffiliations] = useState('')

  // {
  //   gender: '',
  //   species: '',
  //   homeworld: '',
  //   cybernetics: '',
  // }

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

  const filters = {
    gender: filterGender,
    homeworld: filterHomeworld,
    species: filterSpecies,
    cybernetics: filterCybernetics,
    affiliations: filterAffiliations,
  }
  console.log(filters)

  // const filteredCharacters = []
  // const filterFunk = character => {
  //   for (const key in character) {
  //     if (
  //       (character[key].homeworld === filters.homeworld ||
  //         filters.homeworld === undefined) &&
  //       (character[key].gender === filters.gender ||
  //         filters.homeworld === undefined) &&
  //       (character[key].species === filters.species ||
  //         filters.homeworld === undefined) &&
  //       (character[key].cybernetics === filters.cybernetics ||
  //         filters.homeworld === undefined) &&
  //       (character[key].affiliations === filters.gender ||
  //         filters.homeworld === undefined)
  //     ) {
  //       filteredCharacters.push(character[key])
  //     }
  //   }
  // }
  // filterFunk(character)

  // const filteredCharacters = character.filter(element =>
  //   element
  //     .includes(filterGender)
  //     .includes(filterHomeworld)
  //     .includes(filterSpecies)
  //     .includes(filterCybernetics)
  //     .includes(filterAffiliations),
  // )

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
      <Header />
      <Menu
        setFilterGender={setFilterGender}
        setFilterSpecies={setFilterSpecies}
        setFilterHomeworld={setFilterHomeworld}
        setFilterCybernetics={setFilterCybernetics}
        setFilterAffiliations={setFilterAffiliations}
      />
      <Hero />
      <CardListAPI filteredCharacters={filteredCharacters} />
    </>
  )
}

export default App
