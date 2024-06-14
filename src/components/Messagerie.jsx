import '../styles/Messagerie.modules.css'
import abdou from '../assets/1558184944803.jpeg'
import react from '../assets/react.svg'
import search from '../assets/Loupe-removebg-preview.svg'
import Message from './Message'
const Messagerie = () => {
  return (
    <div className="messagerie">
      <header>
        <div className="header__left">
          <img src={abdou} alt="" />
          <p>Messagerie</p>
        </div>
        <div className="header__right">
          <img src={react} alt="" />
          <img src={react} alt="" />
          <img src={react} alt="" />
        </div>
      </header>
      <div className="input">
        <img src={search} alt="" />
        <input type="text" placeholder="Rechercher dans les messages" />
      </div>
      <Message />
    </div>
  )
}

export default Messagerie
