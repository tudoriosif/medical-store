import React, { useState } from "react";

function ProfileData(props) {
  
  // eslint-disable-next-line
  const [user, setUser] = useState(props.user);

  return (
    <div className="data-container">
      <h3 style={{ textAlign: "left" }}>
        {" "}
        Account ID: <span>{user.id}</span>
      </h3>
      <label htmlFor="username"className="data-label">Username:</label>
      <input
        readOnly
        type="text"
        name="username"
        value={user.username}
      />
      <label htmlFor="username" className="data-label">Email:</label>
      <input
        readOnly
        type="text"
        name="email"
        value={user.email}
      />
      <div className="connection-status">
          <span>You are connected!</span>
      </div>
    </div>
  );
}

export default ProfileData;
