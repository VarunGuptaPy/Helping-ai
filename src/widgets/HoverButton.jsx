import React, { useState } from "react";
import "./HoverButton.css";

const HoverButton = ({ title, subtitle, onTap }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`button-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onTap()}
    >
      <div className="button-content">
        <div className="button-title">{title}</div>
        <div style={{ height: "10px" }}></div>
        <div className="button-subtitle">{subtitle}</div>
        {!isHovered ? <div></div> : <div className="button-arrow">→</div>}
      </div>
    </button>
  );
};

export default HoverButton;
