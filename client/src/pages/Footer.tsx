import { CgCopyright } from 'react-icons/cg';

const Footer = () => {
    return (
        <div className="bottom-0 w-full z-30 flex flex-col md:flex-row justify-center items-center p-3 mt-6 bg-[var(--secondary)]/40 absolute gap-4">
            <h1 className="footer_copy">
                <CgCopyright size={24} /> Copyright 2025 - All rights reserved
            </h1>
            <h1 className="footer_text">
                Created By:
                <a
                    href="https://github.com/gnjohnny"
                    target="_blank"
                    className="underline"
                >
                    Johnny Dev
                </a>
            </h1>
        </div>
    );
};

export default Footer;
