import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from "react-icons/fi";

export default function Header () {
  const [menuOpen, setMenuOpen] = useState (false);

  return (
      <nav>
        <div className='menu'>
          <button 
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}>
         <FiMenu size={24} />
          </button>
          <Link to="/" style={{float: "right", borderLeft: "none"}}> <img src="" alt=""/> Logo </Link> 
        </div>

      <ul style={{ display: menuOpen ? 'block' : 'none' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  )
}