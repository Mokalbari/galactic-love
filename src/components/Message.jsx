import abdou from '../assets/1558184944803.jpeg'
import '../styles/Message.css'

const Message = () => {
  return (
    <>
      <div className="message">
        <img src={abdou} alt="" />
        <div className="message__contenu">
          <h2>Auteur</h2>
          <p>coucou ca va moi c'est abdou, j'aime les poulets</p>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Message
