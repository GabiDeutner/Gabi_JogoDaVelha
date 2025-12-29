import React from "react";
import "./styles.css";

const LogoGame = ({ light, onClick }) => (
  <div className="logo-wrapper" style={{ textAlign: 'center' }}>
    <h1 className={`logo-game ${light ? "-light" : ""}`}>
      GABI<span>DEUTNER</span>
    </h1>
    {}
    {!light && (
      <button className="about-button" onClick={onClick}>
        SOBRE
      </button>
    )}
  </div>
);

export default LogoGame;
