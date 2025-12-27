import React from "react";
import "./styles.css";

const LogoGame = ({ light }) => (
  <h1 className={`logo-game ${light ? "-light" : ""}`}>
    GABI<span>DEUTNER</span>
  </h1>
);

export default LogoGame;
