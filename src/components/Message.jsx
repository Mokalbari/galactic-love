import abdou from '../assets/1558184944803.jpeg'
import '../styles/Message.css'

const Message = ({ selectedCharacter }) => {
  return (
    <>
      <div className="message">
        <img src={selectedCharacter.image} alt="" />
        <div className="message__contenu">
          <h2 className="message__name">{selectedCharacter.name}</h2>
          <div className="message__contenu__input">
            <input type="text" />
            <button type="button">send</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Message
