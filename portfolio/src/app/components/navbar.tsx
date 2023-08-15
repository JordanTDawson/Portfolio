'use client'
import Link from 'next/link';
import navItems, { NavItem } from '../assets/data/navItems';
import React, { useState } from 'react';

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (page: string) => {
    setActiveLink(page);
  };

  return (
    <nav className='fixed top-0 left-0 flex flex-col justify-center items-center h-screen p-4'>
      {navItems.map((item: NavItem) => (
        <Link
          className={`hover:text-white text-2xl my-3 ${
            activeLink === item.page ? 'text-white' : 'text-gray-500'
          }`}
          href={`/${item.page}`}
          key={item.page}
          onClick={() => handleLinkClick(item.page)}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
