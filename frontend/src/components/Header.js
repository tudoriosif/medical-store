import React from 'react'
import "../styles/Header.css";
import {FaHospital} from 'react-icons/fa';

function Header() {
    return (
        <nav id="header" className="header">
            <div className="logo">
                 <FaHospital/>
                 <div className="logo-name"> Meds Connect </div>
            </div>
            <div className="link-list">
                <ul className="links">
                    <li className="link">
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li className="link">
                        <a href="/#aboutus">
                            About us
                        </a>
                    </li>
                    <li className="link">
                        <a href="/">
                            Contact
                        </a>
                    </li>
                    <li className="link">
                        <a href="/login">
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
