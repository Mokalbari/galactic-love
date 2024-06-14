import { useState } from 'react'
import '../styles/Header.css'
function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <header className="header">
      <div className="header-content">
        <div class="logo"><b><span>La</span> <span>Can</span>tina <span>de </span>Ja<span>ba </span></b></div>
        {/* <div
          className="burger-icon"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        /> */}
      </div>
      {/* {menuOpen && <BurgerMenu filter={''} />} */}
    </header>
  )
}

export default Header
