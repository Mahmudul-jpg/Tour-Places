import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../logo.PNG'

function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt='' np />
            <ul className="nav-links">

                <li>

                    <NavLink to="/" className="nav-link">
                        Home
                    </NavLink>
                </li>
                <li>

                    <NavLink to="/tour" className="nav-link ">
                        Tours
                    </NavLink>
                </li>
                <li>

                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}
export default Navbar