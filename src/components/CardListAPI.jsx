import { useEffect } from 'react'
import CarteCaroussel from './CarteCaroussel'

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

  return (<div>
    {data.map(element =>
      <CarteCaroussel key={data.id} {...data} />
    )}
  </div>)
}

export default CardListAPI
