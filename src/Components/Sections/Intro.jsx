import { Link } from 'react-router-dom';

export default function Intro () {
    return (
        <div>
            <h2> Your reliable AI assistant </h2>
            <p> Ask, confirm, and care, one query at a time </p>
            <Link to="/signup">
            <button>
                Get Started
            </button>
            </Link>
        </div>
    )
}
