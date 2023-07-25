export interface NavItem {
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

export default navItems;