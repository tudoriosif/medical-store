import React from "react";
import { FaHospital, FaUserMd } from "react-icons/fa";
import "../styles/DashNav.css";
function DashNav() {
  return (
    <div>
      <nav id="header" className="header">
        <div className="logo">
          <FaHospital />
          <div className="logo-name"> Meds Connect </div>
        </div>
        <div className="link-list">
          <ul className="links">
            <li className="link">
              <a href="/dashboard/shop">Shop</a>
            </li>
            <li className="link">
              <a href="/dashboard/stock">Stock</a>
            </li>
            <li className="link">
              <a href="/dashboard">
                  <FaUserMd size={36} className="profile-icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default DashNav;
