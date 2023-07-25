import Link from "next/link";
import navItems, { NavItem } from "../assets/images/data/navItems";
import React from "react";

const NavBar: React.FC = () => {
    return (
        <header className="sticky top-0 flex justify-center items-center">
            {navItems.map((item: NavItem) => (
                <Link className="hover:text-white text-2xl mx-3 pt-3 text-gray-500" href={`#${item.page}`} key={item.page}>
                    {item.label}
                </Link>
            ))}
        </header>
    );
}

export default NavBar;