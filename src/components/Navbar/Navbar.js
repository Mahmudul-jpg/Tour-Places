import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../logo.PNG'
function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt='' np />
            <ul className="nav-links">

                <li>

                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li>

                    <Link to="/tour" className="nav-link ">
                        Tours
                    </Link>
                </li>
                <li>

                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar