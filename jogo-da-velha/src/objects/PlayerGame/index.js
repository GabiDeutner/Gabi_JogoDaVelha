import React from "react";
import "./styles.css";

const PlayerGame = ({ content }) => (
  <span className="player-game" data-content={content}>
    {content}
  </span>
);

export default PlayerGame;
