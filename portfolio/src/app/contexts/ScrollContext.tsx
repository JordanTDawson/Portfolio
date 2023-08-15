import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface NavItem {
  label: string;
  page: string;
}

interface ScrollContextProps {
  currentSection: string;
  goToNextSection: () => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [currentSection, setCurrentSection] = useState('#');

  const navItems: NavItem[] = [
    {
      label: 'Intro',
      page: '#',
    },
    {
      label: 'Skills',
      page: '#skills'
    },
    {
      label: 'Projects',
      page: '#projects',
    },
    {
      label: 'Credentials',
      page: '#credentials',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const item of navItems) {
        const sectionElement = document.querySelector(item.page);
        if (sectionElement && sectionElement.getBoundingClientRect().top <= window.innerHeight / 2) {
          setCurrentSection(item.page);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navItems]);

  const goToNextSection = () => {
    const currentIndex = navItems.findIndex(item => item.page === currentSection);
    if (currentIndex !== -1 && currentIndex + 1 < navItems.length) {
      const nextSection = navItems[currentIndex + 1].page;
      document.querySelector(nextSection)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ currentSection, goToNextSection }}>
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
