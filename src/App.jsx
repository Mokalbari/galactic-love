import './App.css'

import Header from './components/Header'
import CardListAPI from './components/CardListAPI'
import BurgerMenu from './components/BurgerMenu'

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

      <Header /> 

      <CardListAPI character={character}/>

    </>
  )
}

export default App
