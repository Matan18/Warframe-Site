import React, { createContext, useState, useEffect } from 'react';

interface IPlatformContext {
  platform: string;
  setPlatform: (value: string) => void;
}

export const PlatformContext = createContext<IPlatformContext>({} as IPlatformContext)

const PlatformProvider: React.FC = ({ children }) => {
  const [platform, setPlatform] = useState('pc');
  useEffect(() => {
    console.log(platform)
  }, [platform])

  return (
    <PlatformContext.Provider value={{ platform, setPlatform }}>
      {children}
    </PlatformContext.Provider>

  )
}

export default PlatformProvider;
