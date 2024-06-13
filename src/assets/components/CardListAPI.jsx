import { useEffect } from 'react'

function CardListAPI() {
  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        'https://miadil.github.io/starwars-api/api/all.json',
      )
      const data = await response.json()
      console.log(data)
    }
    fetchAPI()
  }, [])

  return <div>Coucou</div>
}

export default CardListAPI
