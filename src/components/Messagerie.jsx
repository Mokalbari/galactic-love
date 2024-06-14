import '../styles/Messagerie.modules.css'
import abdou from '../assets/1558184944803.jpeg'
import react from '../assets/react.svg'
import search from '../assets/Loupe-removebg-preview.svg'
import Message from './Message'
import { useState } from 'react'
import ArrowUp from '../assets/arrow-up-outline.svg'
import ArrowDown from '../assets/arrow-down-outline.svg'
import Points from '../assets/3points-removebg-preview.svg'
import NewMessage from '../assets/NewMessage-removebg-preview.svg'

const Messagerie = ({ selectedCharacter }) => {
  const [messagerie, setMessagerie] = useState(false)

  const handleClick = () => {
    setMessagerie(!messagerie)
  }

  return (
    <>
      {messagerie ? (
        <div className="messagerie">
          <header>
            <div className="header__left">
              <img src={abdou} alt="" />
              <p>Messagerie</p>
            </div>
            <div className="header__right">
              <img src={Points} alt="" />
              <img src={NewMessage} alt="" />
              <img
                onClick={handleClick}
                onKeyDown={handleClick}
                src={ArrowDown}
                alt=""
              />
            </div>
          </header>
          <div className="input">
            <img src={search} alt="" />
            <input type="text" placeholder="Rechercher" />
          </div>
          <Message selectedCharacter={selectedCharacter} />
        </div>
      ) : (
        <div className="messagerie__small">
          <header>
            <div className="header__left">
              <img src={abdou} alt="" />
              <p>Messagerie</p>
            </div>
            <div className="header__right">
              <img src={Points} alt="" />
              <img src={NewMessage} alt="" />
              <img
                onClick={handleClick}
                onKeyDown={handleClick}
                src={ArrowUp}
                alt=""
              />
            </div>
          </header>
        </div>
      )}
    </>
  )
}

export default Messagerie

// (
//     <>
//       {messagerie ? (
//         <div className="messagerie">
//           <header>
//             <div className="header__left">
//               <img src={abdou} alt="" />
//               <p>Messagerie</p>
//             </div>
//             <div className="header__right">
//               <img src={react} alt="" />
//               <img src={react} alt="" />
//               <img onClick={handleClick} src={react} alt="" />
//             </div>
//           </header>
//           <div className="input">
//             <img src={search} alt="" />
//             <input type="text" placeholder="Rechercher dans les messages" />
//           </div>
//           <Message selectedCharacter={selectedCharacter} />
//         </div>
//       ) : (
//         <header className="messagerie__closed">
//           <div className="header__left">
//             <img src={abdou} alt="" />
//             <p>Messagerie</p>
//           </div>
//           <div className="header__right">
//             <img src={react} alt="" />
//             <img src={react} alt="" />
//             <img onClick={handleClick} src={react} alt="" />
//           </div>
//         </header>
//       )}
//     </>
//   )
