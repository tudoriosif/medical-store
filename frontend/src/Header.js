import React from 'react'
import "./Header.css";
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
                        <a>
                            Home
                        </a>
                    </li>
                    <li className="link">
                        <a>
                            About us
                        </a>
                    </li>
                    <li className="link">
                        <a >
                            Login
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
