import './App.css'
import { useEffect, useState } from 'react'
import CardListAPI from './components/CardListAPI'

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
      <CardListAPI character={character}/>
    </>
  )
}

export default App
