import React from 'react';

import WarframeTitle from '../../assets/warframetitle.png'
import { HeaderProps } from './HeaderInterfaces';
import { Container, Title, Line } from "../../styles/components/Header/styles";
import Platform from "./Platform";
import Arsenal from '../Arsenal';
import NotifyMenu from '../NotifyMenu';

const Header: React.FC<HeaderProps> = ({ changePlatform }) => {
  return (
    <Container>
      <Line>
        <img src={WarframeTitle} alt="warframe-logo" />
        <Title>Informações sobre os itens do Warframe</Title>
        <Platform changePlatform={changePlatform} />
      </Line>
      <Line>
        <Arsenal />
        <NotifyMenu />
      </Line>
    </Container>
  )
}

export default Header;
