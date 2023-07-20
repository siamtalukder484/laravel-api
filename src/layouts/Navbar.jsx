import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className='container'>
            <div className='nav_wrapper'>
                <div className='logo'>
                    <h1>Logo</h1>
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="about">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="service">
                                Service
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="blog">
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink to="registration">
                        Registration
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar