import React, { createContext, useContext, useState } from 'react';
import { navLinks } from '../data/navLinks';

type Links = (typeof navLinks)[number]['name'];

type ActiveSectionContextType = {
  activeSection: Links;
  setActiveSection: React.Dispatch<React.SetStateAction<Links>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

const ActiveSectionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<Links>('home');

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null)
    throw new Error(
      'Hook is used outside of the provider. Wrap the parent component in <ActiveSectionContextProvider>'
    );

  return context;
};

export default ActiveSectionContextProvider;
