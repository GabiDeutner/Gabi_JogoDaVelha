import React from "react";
import "./styles.css";

const ProfileUser = ({ photo }) => (
  <article className="profile-user">
    <img className="avatar" src={photo} alt="Foto de Gabi Deutner" />
    <h1 className="title">Gabi Deutner</h1>
    <p className="description">
      Programadora, Engenheira de Software e ex-USPiana. Troquei as fórmulas químicas pelas linhas de código e, 
      desde 2020, transformo problemas complexos em sistemas eficientes. Minha especialidade? Analisar cenários 
      e encontrar a melhor jogada, seja no desenvolvimento de softwares ou aqui, neste tabuleiro!
    </p>
    
    {}
    <nav className="social-media">
      <a href="https://github.com/GabiDeutner" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" style={{filter: 'invert(1)'}} />
      </a>
      <a href="https://linkedin.com/in/gabideutner" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
      </a>
    </nav>
  </article>
);

export default ProfileUser;
