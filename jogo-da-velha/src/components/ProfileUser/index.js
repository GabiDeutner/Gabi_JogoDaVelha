import React from "react";
import "./styles.css";
import AvatarProfile from "../../objects/AvatarProfile";
import SocialMedias from "../../objects/SocialMedias";

const ProfileUser = ({ photo }) => (
  <dl className="profile-user">
    <dd className="photo">
      <AvatarProfile src={photo} alt="Profile da Gabi Deutner" />
    </dd>
    <dt className="title">Gabi Deutner</dt>
    <dd className="description">
    Sou Desenvolvedora Web e Analista de Sistemas com experiência em sistemas bancários, 
    formada pela Faculdade de Tecnologia de São Paulo em Informática para Negócios e graduada 
    com bacharelado em Farmácia e Bioquímica pela Universidade de São Paulo.
    </dd>
    <dd className="medias">
      <SocialMedias />
    </dd>
  </dl>
);

export default ProfileUser;