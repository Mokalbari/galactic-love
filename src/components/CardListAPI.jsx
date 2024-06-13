import React, { useState, useEffect } from 'react';

// function CardListAPI() {
//   useEffect(() => {
//     const fetchAPI = async () => {
//       const response = await fetch(
//         'https://miadil.github.io/starwars-api/api/all.json',
//       )
//       const data = await response.json()
//       console.log(data)
//     }
//     fetchAPI()
//   }, [])

//   return <div>Coucou</div>
// }

import Hero from './Hero';
import './Hero.css';

function CardListAPI() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetch(
        'https://miadil.github.io/starwars-api/api/all.json',
      );
      const data = await response.json();
      setData(data[0]);
    }
    fetchAPI();
  }, []);

  return (
    <div>
      {data ? (
        <Hero
          name={data.name}
          homeworld={data.homeworld}
          cybernetics={data.cybernetics}
          image={data.image}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default CardListAPI
