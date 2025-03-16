import { IconType } from 'react-icons';
import { DiMongodb } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa6';
import {
    SiExpress,
    SiTailwindcss,
    SiThemoviedatabase,
    SiSocketdotio,
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

interface TechStack {
    title: string;
    icon: IconType;
}

const Portfolio = () => {
    const netflixTechStack: TechStack[] = [
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
    const chatTechStack: TechStack[] = [
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
            title: 'Socket Io',
            icon: SiSocketdotio,
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
                            <button className="p-3 text-white font-bold text-center bg-[var(--accent)] cursor-pointer shadow-sm shadow-white hover:bg-[var(--accent)]/80 transition duration-300 w-1/2 mx-auto flex justify-center md:mx-0 auto_display  ">
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
                            BASIC MERN CHAT APP
                        </h1>
                        <p className="text-lg font-light text-[var(--accent_text)]/80 text-center md:text-start my-2 fade-in-right">
                            A real-time chat application built using the MERN
                            stack (MongoDB, Express, React, Node.js) and
                            Socket.io for instant messaging. Users can sign up,
                            log in, send messages, and create chat rooms with a
                            smooth and responsive UI. The app features JWT
                            authentication, and MongoDB storage for persistent
                            conversations.
                        </p>

                        <p className="text-sm font-extralight text-[var(--secondary_text)] my-1 text-center md:text-start fade-in-right">
                            Tech stack used:{' '}
                        </p>
                        <div className="w-full flex flex-wrap justify-center items-center gap-2 fade-in-right">
                            {chatTechStack.map((stack, idx) => (
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
                            <button className="p-3 text-white font-bold text-center bg-[var(--accent)] cursor-pointer shadow-sm shadow-white hover:bg-[var(--accent)]/80 transition duration-300 w-1/2 mx-auto flex justify-center md:mx-0 auto_display  ">
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
            </div>
        </div>
    );
};

export default Portfolio;
