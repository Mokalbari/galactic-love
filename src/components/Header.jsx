import { useState } from 'react'
import '../styles/Header.css'
function Header({ src }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-content">
        <div class="logo"><b><span>La</span> <span>Can</span>tina <span>de </span>Ja<span>ba </span></b></div>
      </div>
    </header>
  )
}

export default Header
