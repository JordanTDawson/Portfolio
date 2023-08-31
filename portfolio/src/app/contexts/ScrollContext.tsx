'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScrollContextProps {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState('#');

  const contextValue = {
    currentSection,
    setCurrentSection,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider');
  }
  return context;
}
