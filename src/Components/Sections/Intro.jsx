import { Link } from 'react-router-dom';

export default function Intro () {
    return (
        <div className="intro-container">
            <h2> Your Reliable Medical AI Assistant </h2>
            <p> Ask, confirm and care, one question at a time. </p>
            <Link to="/signup">
            <button>
                Get Started
            </button>
            </Link>
        </div>
    )
}
