// import { Link } from 'react-router-dom';

export default function Footer () {
    return (
     <footer className="footer">
        <div className="footer-section">
            <h3> About Us </h3>
            <ul>
            <li><a href="/about">Our Story</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h3> Contact </h3>
            <ul>
            <li><a href="mailto:askDrGPT@yahoo.com"> askDrGPT@yahoo.com</a></li>
            <li><a href="tel:+23481305843728"> 081305843728</a></li>
            <li><a href="/"> nowhere street, Asokoro, Abuja</a></li>
            </ul>
        </div>
    </footer>
    )
}
    