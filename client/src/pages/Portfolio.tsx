import { IconType } from 'react-icons';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs, FaDatabase } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';
import {
    SiExpress,
    SiTailwindcss,
    SiThemoviedatabase,
    SiDaisyui,
    SiStreamlit,
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

type TechStackType = {
    title: string;
    icon: IconType;
};

const Portfolio = () => {
    const netflixTechStack: TechStackType[] = [
        {
            title: 'React',
            icon: FaReact,
        },
        {
            title: 'Node Js',
            icon: FaNodeJs,
        },
        {
            title: 'Express Js',
            icon: SiExpress,
        },
        {
            title: 'Mongo DB',
            icon: DiMongodb,
        },
        {
            title: 'Tailwind CSS',
            icon: SiTailwindcss,
        },
        {
            title: 'TMDB',
            icon: SiThemoviedatabase,
        },
    ];
    const vidchaTechStack: TechStackType[] = [
        {
            title: 'React',
            icon: FaReact,
        },
        {
            title: 'Node Js',
            icon: FaNodeJs,
        },
        {
            title: 'Express Js',
            icon: SiExpress,
        },
        {
            title: 'Mongo DB',
            icon: DiMongodb,
        },
        {
            title: 'Tailwind CSS',
            icon: SiTailwindcss,
        },
        {
            title: 'Daisy UI',
            icon: SiDaisyui,
        },
        {
            title: 'Streamify',
            icon: SiStreamlit,
        },
    ];
    const recipyTechStack: TechStackType[] = [
        {
            title: 'React',
            icon: FaReact,
        },
        {
            title: 'TheMealDB',
            icon: FaDatabase,
        },
        {
            title: 'Tailwind CSS',
            icon: SiTailwindcss,
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1 className="portfolio_head head_reveal">Portfolio</h1>
            <div className="portfolio_content_cont">
                <div className="portfolio_content auto_display">
                    <div className="flex-1 h-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl text-[var(--accent_text)] font-bold text-center md:text-start my-2 gradient">
                            NETFLIX CLONE
                        </h1>
                        <p className="text-lg font-light text-[var(--accent_text)]/80 text-center md:text-start my-2 fade-in-right">
                            A full-stack Netflix clone built using the MERN
                            stack (MongoDB, Express, React, Node.js), offering a
                            seamless streaming experience. This project features
                            user authentication, movie browsing, dynamic search,
                            and a responsive UI. Integrated JWT authentication
                            ensures secure access.
                        </p>

                        <p className="text-sm font-extralight text-[var(--secondary_text)] my-1 text-center md:text-start fade-in-right">
                            Tech stack used:{' '}
                        </p>
                        <div className="w-full flex flex-wrap justify-center items-center gap-2 fade-in-right">
                            {netflixTechStack.map((stack, idx) => (
                                <div
                                    className="bg-[var(--secondary)]/70 flex justify-center items-center py-1 px-3 rounded-4xl"
                                    key={idx}
                                >
                                    <h1 className="text-lg font-semibold text-[var(--accent_text)] flex justify-center items-center gap-2">
                                        <stack.icon /> {stack.title}
                                    </h1>
                                </div>
                            ))}
                        </div>

                        <a href="https://netflix-clone-i3jm.onrender.com/">
                            <h1 className="text-md font-light italic text-[var(--accent_text)] flex my-3 gap-2 underline w-1/2 mx-auto md:w-full fade-in-right">
                                Follow this live link for preview{' '}
                                <FiExternalLink />
                            </h1>
                        </a>

                        <h3 className="text-md font-light italic text-[var(--accent_text)] my-3 text-center md:text-start fade-in-right">
                            Check out for the above project code from:{' '}
                        </h3>
                        <a href="https://github.com/gnjohnny/netflix-clone">
                            <button className="p-3 text-white font-bold text-center bg-[var(--accent)] cursor-pointer shadow-sm shadow-white hover:bg-[var(--accent)]/80 transition duration-300 w-1/2 mx-auto flex justify-center md:mx-0 fade-in-right  ">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 h-full md:w-1/2">
                        <img
                            src="/netflix.png"
                            alt=""
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                </div>
                <div className="portfolio_content auto_display">
                    <div className="flex-1 h-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl text-[var(--accent_text)] font-bold text-center md:text-start my-2 gradient">
                            VIDCHA
                        </h1>
                        <p className="text-lg font-light text-[var(--accent_text)]/80 text-center md:text-start my-2 fade-in-right">
                            Vidcha is a video calling and chat platform that
                            lets you connect with friends through high-quality
                            calls and instant messaging. You can easily send and
                            receive friend requests, making it simple to grow
                            your network. Powered by Streamify for a smooth and
                            reliable experience
                        </p>

                        <p className="text-sm font-extralight text-[var(--secondary_text)] my-1 text-center md:text-start fade-in-right">
                            Tech stack used:{' '}
                        </p>
                        <div className="w-full flex flex-wrap justify-center items-center gap-2 fade-in-right">
                            {vidchaTechStack.map((stack, idx) => (
                                <div
                                    className="bg-[var(--secondary)]/70 flex justify-center items-center py-1 px-3 rounded-4xl"
                                    key={idx}
                                >
                                    <h1 className="text-lg font-semibold text-[var(--accent_text)] flex justify-center items-center gap-2">
                                        <stack.icon /> {stack.title}
                                    </h1>
                                </div>
                            ))}
                        </div>

                        <a href="https://chatty-5vu9.onrender.com/">
                            <h1 className="text-md font-light italic text-[var(--accent_text)] flex my-3 gap-2 underline w-1/2 mx-auto md:w-full fade-in-right">
                                Follow this live link for preview{' '}
                                <FiExternalLink />
                            </h1>
                        </a>

                        <h3 className="text-md font-light italic text-[var(--accent_text)] my-3 text-center md:text-start fade-in-right">
                            Check out for the above project code from:{' '}
                        </h3>
                        <a href="https://github.com/gnjohnny/mern-chat-app">
                            <button className="p-3 text-white font-bold text-center bg-[var(--accent)] cursor-pointer shadow-sm shadow-white hover:bg-[var(--accent)]/80 transition duration-300 w-1/2 mx-auto flex justify-center md:mx-0 fade-in-right  ">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 h-full md:w-1/2">
                        <img
                            src="/chatty.png"
                            alt=""
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                </div>
                <div className="portfolio_content auto_display">
                    <div className="flex-1 h-full md:w-1/2">
                        <h1 className="text-4xl md:text-6xl text-[var(--accent_text)] font-bold text-center md:text-start my-2 gradient">
                            RECIPE APP
                        </h1>
                        <p className="text-lg font-light text-[var(--accent_text)]/80 text-center md:text-start my-2 fade-in-right">
                            A user-friendly web application that allows users to
                            explore, search, and save a variety of recipes.
                            Features include category-based browsing, detailed
                            cooking instructions, ingredient lists, and the
                            ability to add and manage personal recipes. Built
                            with a focus on responsive design and intuitive user
                            experience.
                        </p>

                        <p className="text-sm font-extralight text-[var(--secondary_text)] my-1 text-center md:text-start fade-in-right">
                            Tech stack used:{' '}
                        </p>
                        <div className="w-full flex flex-wrap justify-center items-center gap-2 fade-in-right">
                            {recipyTechStack.map((stack, idx) => (
                                <div
                                    className="bg-[var(--secondary)]/70 flex justify-center items-center py-1 px-3 rounded-4xl"
                                    key={idx}
                                >
                                    <h1 className="text-lg font-semibold text-[var(--accent_text)] flex justify-center items-center gap-2">
                                        <stack.icon /> {stack.title}
                                    </h1>
                                </div>
                            ))}
                        </div>

                        <a href="https://recipe-app-aifc.onrender.com/">
                            <h1 className="text-md font-light italic text-[var(--accent_text)] flex my-3 gap-2 underline w-1/2 mx-auto md:w-full fade-in-right">
                                Follow this live link for preview{' '}
                                <FiExternalLink />
                            </h1>
                        </a>

                        <h3 className="text-md font-light italic text-[var(--accent_text)] my-3 text-center md:text-start fade-in-right">
                            Check out for the above project code from:{' '}
                        </h3>
                        <a href="https://github.com/gnjohnny/recipe-app">
                            <button className="p-3 text-white font-bold text-center bg-[var(--accent)] cursor-pointer shadow-sm shadow-white hover:bg-[var(--accent)]/80 transition duration-300 w-1/2 mx-auto flex justify-center md:mx-0 fade-in-right  ">
                                GitHub Repo
                            </button>
                        </a>
                    </div>
                    <div className="flex-1 h-full md:w-1/2">
                        <img
                            src="/recipe.png"
                            alt=""
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
