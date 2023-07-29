export interface NavItem {
    label: string;
    page: string;
}

const navItems: NavItem[] = [
    {
        label: "Intro",
        page: "#",
    },
    {
        label: "About",
        page: "#about"
    },
    {
        label: "Skills",
        page: "#skills",
    },
    {
        label: "Projects",
        page: "#projects",
    },
];

export default navItems;