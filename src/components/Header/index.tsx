import React from 'react';

import WarframeTitle from '../../assets/warframetitle.png'
import { HeaderProps } from './HeaderInterfaces';
import { Container, Title } from "../../styles/components/Header/styles";
import Platform from "./Platform";

const Header: React.FC<HeaderProps> = ({changePlatform}) => {
  return (
    <Container>
      <img src={WarframeTitle} alt="warframe-logo"/>
      <Title>Informações sobre os itens do Warframe</Title>
      <Platform changePlatform={changePlatform} />
    </Container>
  )
}

export default Header;
