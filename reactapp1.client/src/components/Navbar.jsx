import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo links to home */}
                <Link to="/" className="navbar-logo">
                    K&ouml;paS&auml;lja
                </Link>


                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Kontakta oss</Link></li>

                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
