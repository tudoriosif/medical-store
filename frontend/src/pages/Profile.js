import React from "react";
import Avatar from "../components/Avatar";
import ProfileData from "../components/ProfileData";
import "../styles/Profile.css";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <Avatar />
        <ProfileData user={props.user} />
      </div>
    </div>
  );
}

export default Profile;
