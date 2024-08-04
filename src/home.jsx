export default function Header () {
    return(
        <nav>
            <ul>
            <li> <a href="/signin">Sign In</a> </li>
            <li> <a href="/signup">Sign Up</a> </li>
            <li> <a href="/">Home</a> </li>
            <li style={{float: "left", borderRight: "none"}}> 
            <a href="/"> <img src="" alt=""/> Logo </a> </li>
        </ul>
      </nav>
    )
}
