import React from "react";
import "./styles.css";

import LogoGame from "../../objects/LogoGame";

const HeaderInternal = ({ onClick }) => (
  <header className="header-internal">
    {}
    <LogoGame light />
    
    {}
    <button className="about-close" onClick={onClick}>
      SOBRE <span>X</span>
    </button>
  </header>
);

export default HeaderInternal;
