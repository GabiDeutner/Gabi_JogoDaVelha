import React from "react";
import "./styles.css";
import LogoGame from "../../objects/LogoGame";

const HeaderGame = ({ onClick }) => (
  <header className="header-game">
    {}
    <LogoGame onClick={onClick} />
  </header>
);

export default HeaderGame;
