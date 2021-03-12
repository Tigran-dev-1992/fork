import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar d-flex align-items-center">
            <div className="navbar__brand">
                Github
            </div>
            <nav className="navbar__nav ">
                <ul className="navbar__items d-flex">
                    <li className="navbar__item">
                        <NavLink to="/" exact className="nav__link">Hompage</NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/developers" className="nav__link">Developers</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar