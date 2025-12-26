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

  const handleClickShowHideMenu = () => setAboutActive(old => !old);
  const handleClickShowHideHistory = () => setHistoryActive(old => !old);

  const addHistory = (player) => {
    setHistory(old => [...old, `Adicionou ${player.toUpperCase()}`]);
  };

  return (
    <>
      <HeaderGame onClick={handleClickShowHideMenu} />
      <CardLight>
        <HashtagGame callback={addHistory} />
      </CardLight>
      
      <InputCheckbox 
        id="show" 
        value="Mostrar eventos" 
        onClick={handleClickShowHideHistory} 
        disabled={history.length === 0}
      />
      
      {}
      <HistoryGame 
        tags={history} 
        isActive={historyActive}
      />

      <LayerDark isActive={aboutActive}>
        <HeaderInternal onClick={handleClickShowHideMenu} />
        <ProfileUser photo={Photo} />
      </LayerDark>
    </>
  );
};

export default App;
