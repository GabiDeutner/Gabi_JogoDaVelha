import React from "react";
import "./styles.css";

const ProfileUser = ({ photo }) => (
  <article className="profile-user">
    <img className="avatar" src={photo} alt="Foto de Gabi Deutner" />
    <h1 className="title">Gabi Deutner</h1>
    <p className="description">
      Atuo como Desenvolvedora de Sistemas desde 2020 e sou Pós-Graduada e Especialista 
      em Engenharia de Software pela PUC Minas. Sou graduada em Informática para Negócios 
      pela FATEC-SP e possuo bacharelado em Farmácia e Bioquímica pela USP - Universidade 
      de São Paulo, formação que me conferiu rigor científico e uma visão analítica 
      estruturada para a resolução de problemas complexos em tecnologia.
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
