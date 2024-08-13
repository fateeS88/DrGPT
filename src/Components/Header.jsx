import { Link } from 'react-router-dom';

export default function Header () {
  return (
      <nav>
      <ul>
        <li style={{ float: "right", borderLeft: "none" }}>
        <Link to="/"><img src="" alt=""/> Logo </Link> </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </nav>
  )
}