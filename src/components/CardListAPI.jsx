import CarteCaroussel from './CarteCaroussel'
import "../styles/CardListApi.css"

function CardListAPI({character}) {
  
   var lorys = ""
  return (<div className='carte-liste'>
    {character.map(element =>
      <CarteCaroussel key={element.id} {...element} />
    )}
  </div>)
}

export default CardListAPI
