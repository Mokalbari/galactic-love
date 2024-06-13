import { useState } from "react"
import BurgerMenu from "./BurgerMenu"
import "./Header.css"
function Header () {
    const [menuOpen,setMenuOpen] = useState(false)
    const toggleMenu = () => {setMenuOpen(!menuOpen)};
    return (
      
        <header className="header">
            <div className="header-content">
                <h1 className="title">La Cantina de Jaba</h1>
                <div className="burger-icon" onClick={toggleMenu}/> 
                   
            </div>
            {menuOpen && <BurgerMenu filter={""}/>}
        </header>
    );
   
};
 
export default Header;