import './App.css'

import Header from './components/Header'
import CardListAPI from './components/CardListAPI'
import BurgerMenu from './components/BurgerMenu'
import Menu from './components/Menu'
import Hero from './components/Hero'
import { useEffect, useState } from 'react'

function App() {
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

  return (
    <>
      <div className="grid">
        <Header />
        <Menu />
        <Hero />
        <CardListAPI character={character} />
      </div>
    </>
  )
}

export default App
