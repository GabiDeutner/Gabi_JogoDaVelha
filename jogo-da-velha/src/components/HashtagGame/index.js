import React, { useState } from "react";
import "./styles.css";
import PlayerGame from "../../objects/PlayerGame";

const HashtagGame = ({ callback, onReset }) => {
  const initialPlayers = [
    { id: 1, content: "" }, { id: 2, content: "" }, { id: 3, content: "" },
    { id: 4, content: "" }, { id: 5, content: "" }, { id: 6, content: "" },
    { id: 7, content: "" }, { id: 8, content: "" }, { id: 9, content: "" }
  ];

  const [players, setPlayers] = useState(initialPlayers);
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = (newPlayers) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        newPlayers[a].content &&
        newPlayers[a].content === newPlayers[b].content &&
        newPlayers[a].content === newPlayers[c].content
      ) {
        return newPlayers[a].content;
      }
    }
    return null;
  };

  const handleClick = (id) => {
    if (winner || players.find(p => p.id === id).content !== "") return;

    const newPlayers = players.map(p => 
      p.id === id ? { ...p, content: turn } : p
    );

    setPlayers(newPlayers);

    if(callback) callback(turn, id);

    const result = checkWinner(newPlayers);
    if (result) {
      setWinner(result);
    } else if (newPlayers.every(p => p.content !== "")) {
      setWinner("Draw");
    } else {
      setTurn(old => (old === 'X' ? 'O' : 'X'));
    }
  };

  const handleReset = () => {
    setPlayers(initialPlayers);
    setTurn('X');
    setWinner(null);
    if(onReset) onReset();
  };

  return (
    <div className="hashtag-wrapper">
      {winner && (
        <div className="winner-area">
          <h2 className="winner-message">
            {winner === "Draw" ? "Empate!" : `Jogador ${winner === 'X' ? '1' : '2'} Ganhou!`}
          </h2>
          <button className="reset-button" onClick={handleReset}>Jogar de Novo</button>
        </div>
      )}
      
      <ul className="hashtag-game">
        {players.map(({ id, content }) => (
          <li key={id} className="item" onClick={() => handleClick(id)}>
            <PlayerGame content={content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HashtagGame;
