import React, { useState } from "react";
import "./App.css";
import Photo from "./img/profile.jpg";

import CardLight from "./objects/CardLight";
import InputCheckbox from "./objects/InputCheckbox";
import LayerDark from "./objects/LayerDark";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame";
import HeaderInternal from "./components/HeaderInternal";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";

const App = () => {
  const [aboutActive, setAboutActive] = useState(false);
  const [historyActive, setHistoryActive] = useState(false);
  const [history, setHistory] = useState([]);

  const handleClickShowHideMenu = () => setAboutActive((old) => !old);
  const handleClickShowHideHistory = () => setHistoryActive((old) => !old);

  const mapPosition = (id) => {
    const positions = {
      1: "na coluna A linha 1", 2: "na coluna B linha 1", 3: "na coluna C linha 1",
      4: "na coluna A linha 2", 5: "na coluna B linha 2", 6: "na coluna C linha 2",
      7: "na coluna A linha 3", 8: "na coluna B linha 3", 9: "na coluna C linha 3"
    };
    return positions[id];
  };

  const addHistory = (player, id) => {
    const playerNumber = player.toUpperCase() === "X" ? "1" : "2";
    const positionText = mapPosition(id);
    
    setHistory((old) => [
      ...old,
      `Jogador ${playerNumber} adicionou ${player.toUpperCase()} ${positionText}`,
    ]);
  };

  const resetHistory = () => setHistory([]);

  return (
    <main id="root">
      <HeaderGame onClick={handleClickShowHideMenu} />

      <CardLight>
        <HashtagGame callback={addHistory} onReset={resetHistory} />
      </CardLight>

      <InputCheckbox
        id="show"
        value="Mostrar eventos"
        onClick={handleClickShowHideHistory}
        disabled={history.length === 0}
      />

      {historyActive && <HistoryGame tags={history} isActive={historyActive} />}

      <LayerDark isActive={aboutActive}>
        <HeaderInternal onClick={handleClickShowHideMenu} />
        <ProfileUser photo={Photo} />
      </LayerDark>
    </main>
  );
};

export default App;
