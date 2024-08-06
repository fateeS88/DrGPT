// export default function Header () {
//     return(
//         <nav>
//             <ul>
//             <li> <a href="/signin">Sign In</a> </li>
//             <li> <a href="/signup">Sign Up</a> </li>
//             <li> <a href="/">Home</a> </li>
//             <li style={{float: "left", borderRight: "none"}}> 
//             <a href="/"> <img src="" alt=""/> Logo </a> </li>
//         </ul>
//       </nav>
//     )
// }

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/">Home</Link></li>
        <li style={{ float: "left", borderRight: "none" }}>
          <Link to="/"><img src="" alt=""/> Logo </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
