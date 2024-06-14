import { useState } from 'react'
import '../styles/Header.css'
function Header({ src }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header__title">La Cantina de Jaba</h1>
      </div>
    </header>
  )
}

export default Header
