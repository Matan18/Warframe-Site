import React, { useCallback, useEffect, useState } from 'react';

import WarframeTitle from '../../assets/warframetitle.png'
import { HeaderProps } from './HeaderInterfaces';
import { Container, Title, Line } from "../../styles/components/Header/styles";
import Platform from "./Platform";
import Arsenal from '../Arsenal';
import NotifyMenu from '../NotifyMenu';

interface IHideFunction {
  hide: (id: number) => void | null;
}

const Header: React.FC<HeaderProps> = ({ changePlatform, hideMenus }) => {
  const [arsenalHide, setArsenalHide] = useState<IHideFunction>({ hide: (id = 0) => { } });
  const [notifyMenuHide, setNotifyMenuHide] = useState<IHideFunction>({ hide: (id = 0) => { } });

  const hideAllMenus = useCallback(() => {
    arsenalHide.hide(-1);
    notifyMenuHide.hide(-1);
  }, [arsenalHide, notifyMenuHide])

  useEffect(() => {
    hideMenus(hideAllMenus)
  }, [hideAllMenus])

  return (
    <Container>
      <Line>
        <img src={WarframeTitle} alt="warframe-logo" />
        <Title>Informações sobre os itens do Warframe</Title>
        <Platform changePlatform={changePlatform} />
      </Line>
      <Line>
        <Arsenal hide={(onItemClick) => { setArsenalHide({ hide: onItemClick }) }} />
        <NotifyMenu hide={(onItemClick) => { setNotifyMenuHide({ hide: onItemClick }) }} />
      </Line>
    </Container>
  )
}

export default Header;
