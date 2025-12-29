import React from "react";
import "./styles.css";

import TagGame from "../../objects/TagGame";

const HistoryGame = ({ tags, isActive }) => (
  <aside className={`history-game ${isActive ? "-active" : ""}`}>
    <ul className="list">
      {tags.map((content, key) => (
        <li key={key} className="item">
          <TagGame content={content} />
        </li>
      ))}
    </ul>
  </aside>
);

export default HistoryGame;
