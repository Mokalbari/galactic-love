import { useEffect } from 'react'

function FetchStarwarsAPI() {
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

export default FetchStarwarsAPI
