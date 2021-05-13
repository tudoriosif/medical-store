import React from "react";
import { FaHospital, FaUserMd, FaShoppingCart, FaBox} from "react-icons/fa";
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
              <a href="/dashboard/shop"><FaShoppingCart size={32} className="profile-icon" /></a>
            </li>
            <li className="link">
              <a href="/dashboard/stock"><FaBox size={28} className="profile-icon" /></a>
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
