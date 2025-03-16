import { FaCopyright } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

interface MobileMenuProps {
    showMobileNav: boolean;
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileMenuProps> = ({
    showMobileNav,
    setShowMobileNav,
}) => {
    return (
        <>
            <div
                className="mobile_nav_menu"
                onClick={() => setShowMobileNav(false)}
                style={{
                    transform: `translateX(${showMobileNav ? '0' : '300px'})`,
                }}
            >
                <button
                    className="mobile_close_btn"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                >
                    <RxCross2 size={28} />
                </button>
                <ul className="mobile_links">
                    <a href="#home">
                        <li className="mobile_link">Home</li>
                    </a>
                    <a href="#about">
                        <li className="mobile_link">About</li>
                    </a>
                    <a href="#portfolio">
                        <li className="mobile_link">Portfolio</li>
                    </a>
                    <a href="#services">
                        <li className="mobile_link">Services</li>
                    </a>
                    <a href="#contact">
                        <li className="mobile_link">Contact</li>
                    </a>
                </ul>
                <hr className="text-[var(--secondary_text)] w-full" />
                <p className="mobile_footer">
                    <FaCopyright size={18} /> Copyright 2025
                </p>
            </div>
        </>
    );
};

export default MobileNav;
