import Link from "next/link";
import navItems, { NavItem } from "../assets/data/navItems";
import React from "react";

const NavBar: React.FC = () => {

  return (
    <nav className="fixed top-0 left-0 flex flex-col justify-center items-center h-screen p-4">
      {navItems.map((item: NavItem) => (
        <Link className="hover:text-white text-2xl my-3 text-gray-500" 
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