import { IconType } from 'react-icons';
import { CiServer } from 'react-icons/ci';
import { FaChalkboardUser } from 'react-icons/fa6';
import { BsDatabaseFillCheck } from 'react-icons/bs';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { GrOptimize } from 'react-icons/gr';
import { LuBugOff } from 'react-icons/lu';
import { VscCodeReview } from 'react-icons/vsc';
import { LuBotMessageSquare } from 'react-icons/lu';


interface Services {
    icon: IconType;
    title: string;
    text: string;
}

export const services: Services[] = [
    {
        icon: FaChalkboardUser,
        title: 'Front-end Development',
        text: 'I create responsive, user-friendly web interfaces using React.js and Next.js, ensuring seamless user experiences across all devices. My expertise includes Tailwind CSS and custom CSS to design modern, visually appealing websites. I optimize performance, implement interactive UI components, and integrate APIs to enhance functionality.',
    },
    {
        icon: CiServer,
        title: 'Backend Development',
        text: 'I develop scalable and secure backend systems using Node.js and Express.js, building robust RESTful APIs and GraphQL services. I design and manage databases with MongoDB, ensuring efficient data storage and retrieval. My expertise includes authentication (JWT, OAuth), payment gateway integration, and server-side logic to power dynamic web applications.',
    },
    {
        icon: BsDatabaseFillCheck,
        title: 'Fullstack Development',
        text: 'I build complete web applications, handling both frontend and backend development. From designing responsive user interfaces to developing secure APIs and managing databases, I create seamless, high-performance web solutions.',
    },
    {
        icon: MdOutlineManageAccounts,
        title: 'Web Management',
        text: 'I provide ongoing website maintenance, security updates, and performance optimization to ensure smooth operation. My services include server management, database backups, bug fixes, SEO improvements, and feature enhancements. I also handle hosting, domain management, and deployment to keep websites fast, secure, and up to date.',
    },
    {
        icon: GrOptimize,
        title: 'Performance optimization',
        text: 'I enhance website speed and efficiency by implementing code optimization, lazy loading, caching strategies, and image compression. I minimize load times using CDNs, database indexing, and efficient API handling. My expertise includes optimizing React applications, reducing bundle size, and improving Core Web Vitals for better user experience and SEO rankings.',
    },
    {
        icon: LuBugOff,
        title: 'Bug fixing & debugging',
        text: 'I identify and resolve issues in web applications, ensuring smooth performance and functionality. Using debugging tools, logging, and error tracking, I troubleshoot UI glitches, API failures, database errors, and performance bottlenecks. My expertise includes fixing JavaScript, React, Node.js, and MongoDB-related bugs, improving code quality, and preventing future issues.',
    },
    {
        icon: VscCodeReview,
        title: 'Code reviews & refactoring',
        text: 'I review code for best practices, efficiency, and security, ensuring maintainability and scalability. I refactor code to improve readability, performance, and structure, reducing technical debt. My expertise includes optimizing React components, restructuring backend logic, and enforcing clean coding standards to enhance overall project quality.',
    },
    {
        icon: LuBotMessageSquare,
        title: 'Technical consulting',
        text: 'I provide expert guidance on web development strategies, technology stacks, and project architecture to help businesses and developers make informed decisions. My consulting covers MERN stack best practices, performance optimization, scalability planning, API design, and security enhancements to ensure efficient and future-proof solutions.',
    },
];
