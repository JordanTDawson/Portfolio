import Link from "next/link";
import { useRouter } from 'next/router';
import navItems, { NavItem } from "../assets/images/data/navItems";
import React from "react";

const NavBar: React.FC = () => {

  return (
    <nav className="fixed flex justify-center items-center inset-x-0 z-50 h-16">
      {navItems.map((item: NavItem) => (
        <Link className="hover:text-white text-2xl mx-3 pt-3 text-gray-500" 
              href={`/${item.page}`} 
              key={item.page}
        >
            {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;
