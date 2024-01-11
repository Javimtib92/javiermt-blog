'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

const NavbarContext = createContext<{
  displayMobileNavigation: boolean;
  setDisplayMobileNavigation: React.Dispatch<any>;
}>({
  displayMobileNavigation: false,
  setDisplayMobileNavigation: () => {},
});

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
  const [displayMobileNavigation, setDisplayMobileNavigation] = useState(false);

  return (
    <NavbarContext.Provider
      value={{ displayMobileNavigation, setDisplayMobileNavigation }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useDisplayMobileNavigation = () => useContext(NavbarContext);
