import React, { useContext, useCallback, useState } from 'react';
import Header from "../Header";

import { PlatformContext } from "../../context/Platform";

interface IHideMenusFunction { hide: () => void; }

const Layout: React.FC = ({ children }) => {
  const { setPlatform } = useContext(PlatformContext);
  const [hideMenusFunc, setHideMenusFunc] = useState<IHideMenusFunction>({
    hide: () => { }
  });
  const hideMenus = useCallback(() => {
    hideMenusFunc.hide();
  }, [hideMenusFunc])

  return (
    <div className="layout" onClick={() => hideMenus()}>
      <Header
        changePlatform={setPlatform}
        hideMenus={(hideFunc) => { setHideMenusFunc({ hide: hideFunc }); }} />
      {children}
    </div>
  )
}

export default Layout;
