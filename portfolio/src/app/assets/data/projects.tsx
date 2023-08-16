export interface ProjectInfo {
    alt: string;
    bulletOne: string;
    bulletTwo: string;
    bulletThree: string;
    image: string;
    languages: string;
    name: string;
    page: string;
    repo: string;
}

const projects: ProjectInfo[] = [
    {
        alt: 'Dark Culture Website',
        bulletOne: 'Developed a responsive online clothing store using React, Express.js, Node.js, and PostgreSQL, ensuring seamless integration of front-end and back-end technologies.',
        bulletTwo: 'Implemented PostgreSQL as the backend database for storing and managing data related to the shopping catalog and shopping cart functionalities.',
        bulletThree: 'Developed a RESTful API with 7 endpoints using Node.js and Express, enabling operations such as retrieving shopping catalog items, managing shopping cart items, and creating new shopping carts.',
        image: '/dark-culture-image.jpg',
        languages: 'React, Express, Node, PostgreSQL',
        name: 'Dark Culture',
        page: 'https://dark-culture.herokuapp.com/',
        repo: 'https://github.com/JordanTDawson/dark-culture',
    },
    {
        alt: 'Olive Garden Fanpage',
        bulletOne: 'Created dynamic full-stack application with server-side rendering for its main pages using Next.js, TypeScript, and Tailwind.',
        bulletTwo: 'Collaborated in all phases of project development, including discussions for technologies to use, features of the application, creating specs in Figma, and creating concise, modular, and syntactic code.',
        bulletThree: 'Significantly contributed to engineering a custom API with hand-crafted endpoints, enabling seamless data delivery and enhancing front-end functionality.',
        image: '/olive-garden-fanpage.jpg',
        languages: 'NextJS, Typescript, Tailwind',
        name: 'Olive Garden Fanpage',
        page: 'https://olive-garden-fanpage.vercel.app/',
        repo: 'https://github.com/joseph-w-valdez/olive-garden-fanpage',
    }
]

export default projects;