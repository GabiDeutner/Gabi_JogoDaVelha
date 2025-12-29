import React from "react";
import "./styles.css";

const MenuGame = ({ onClick }) => (
  <button className="menu-game" onClick={onClick}>
    <span className="center"></span>
  </button>
);

export default MenuGame;
