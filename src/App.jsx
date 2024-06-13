import './App.css'

import Header from './components/Header'
import CardListAPI from './components/CardListAPI'
import BurgerMenu from './components/BurgerMenu'
import Menu from './components/Menu'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'

function App() {
  const [character, setCharacter] = useState([])
  const [filter, setFilter] = useState({
    gender: '',
    species: '',
    homeworld: '',
    cybernetics: '',
  })

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

  console.log(filter)
  return (
    <>
      <Header />
      <Menu setFilter={setFilter} />
      <Hero />
      <CardListAPI filter={filter} character={character} />
    </>
  )
}

export default App
