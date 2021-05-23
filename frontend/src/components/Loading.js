import React from "react";
import {FaSpinner} from 'react-icons/fa';

function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "calc(100vh - 8vh - 20px)",
      }}
    >
      <FaSpinner
        size={100}
        className="loading-icon"
        style={{ color: "#ea2027" }}
      />
    </div>
  );
}

export default Loading;
