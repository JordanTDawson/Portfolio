export interface NavItem {
    label: string;
    page: string;
}

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
        label: 'Testimonials',
        page: '#testimonials',
    },
    {
        label: 'Credentials',
        page: '#credentials',
    },
];

export default navItems;