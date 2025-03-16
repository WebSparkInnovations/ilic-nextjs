'use client';

import React, { createContext, useContext, useState } from 'react';

interface HomePopUpContextProps {
  popupOpened: boolean;
  setpopupOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomePopUpContext = createContext<HomePopUpContextProps>({
  popupOpened: false,
  setpopupOpened: () => {}
});

export function HomePopUpContextProvider({ children }: { children: React.ReactNode }) {
  const [popupOpened, setpopupOpened] = useState<boolean>(false);

  return (
    <HomePopUpContext.Provider
      value={{
        popupOpened,
        setpopupOpened
      }}
    >
      {children}
    </HomePopUpContext.Provider>
  );
}

export function useHomePopUpContext() {
  const context = useContext(HomePopUpContext);
  if (!context) {
    throw new Error('useHomePopUpContext must be used within a HomePopUpContextProvider');
  }
  return context;
}
