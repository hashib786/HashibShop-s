import { createContext, useContext, useState } from "react";

const NavLinkActive = createContext(1);

export const NavLinkProvider = ({ children }) => {
  const [activeHeading, setActiveHeading] = useState(1);

  return (
    <NavLinkActive.Provider value={[activeHeading, setActiveHeading]}>
      {children}
    </NavLinkActive.Provider>
  );
};

export const useNavLink = () => {
  const active = useContext(NavLinkActive);
  return active;
};
