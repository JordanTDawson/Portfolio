import Link from "next/link";

interface NavItem {
    label: string;
    page: string;
}

const navItems: NavItem[] = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Projects",
        page: "projects",
    },
];

export default function NavBar() {
    return (
        <header>
            {navItems.map((item) => (
                <Link href={`/${item.page}`} key={item.page}>
                    {item.label}
                </Link>
            ))}
        </header>
    );
}