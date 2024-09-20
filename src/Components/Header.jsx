import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import { Close } from "@mui/icons-material";

export default function Header () {
  const [menuOpen, setMenuOpen] = useState (false);
  const toggleMenu = () => {
    setMenuOpen (!menuOpen)
  }
  
  return (
    <header className='header'>
      <div className='container'>
        <div className='logo'>
          <Link to="/">My Logo</Link>
        </div>
        <button 
          className='menu-toggle'
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <Close /> : <FiMenu />}
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}> Home </Link>
            </li>
            <li>
              <Link to ="/signup" onClick={toggleMenu}> Sign Up </Link>
            </li>
            <li>
              <Link to ="/signin" onClick={toggleMenu}> Sign In </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`backdrop ${menuOpen ? 'show' : ''}`} onClick={toggleMenu}>

      </div>
    </header>

  )
}