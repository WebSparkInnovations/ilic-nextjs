'use client';

import { createContext, useContext, useState } from 'react';

export const HomePopUpContext = createContext({
  domLoadedFirstTime: true,
  toggleDomLoaded: () => {},
});

export function HomePopUpContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [domLoadedFirstTime, setDomLoadedFirstTime] = useState<boolean>(true);

  function toggleDomLoaded() {
    setDomLoadedFirstTime(false);
  }

  return (
    <HomePopUpContext.Provider
      value={{
        domLoadedFirstTime,
        toggleDomLoaded,
      }}
    >
      {children}
    </HomePopUpContext.Provider>
  );
}

export function useHomePopUpContext() {
  const context = useContext(HomePopUpContext);
  if (!context) {
    throw new Error(
      'useHomePopUpContext must be used within a HomePopUpContextProvider'
    );
  }
  return context;
}
