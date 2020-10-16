import React, { useContext } from 'react';
import Header from "../Header";
// import { Container } from './styles';

import { PlatformContext } from "../../context/Platform";

const Layout: React.FC = ({ children }) => {
  const { setPlatform } = useContext(PlatformContext);

  return (
    <div className="layout">
      <Header changePlatform={setPlatform} />
      {children}
    </div>
  )
}

export default Layout;
