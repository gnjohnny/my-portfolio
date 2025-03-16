import { CiMenuBurger } from 'react-icons/ci';

interface MobileMenuProps {
    showMobileNav: boolean;
    setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar: React.FC<MobileMenuProps> = ({
    showMobileNav,
    setShowMobileNav,
}) => {
    return (
        <header className="nav_header">
            <nav className="nav_bar">
                <a href="#home">
                    <h1 className="nav_bar_head">Johnny</h1>
                </a>
                <ul className="nav_bar_links">
                    <a href="#home">
                        <li className="nav_bar_link">Home</li>
                    </a>
                    <a href="#about">
                        <li className="nav_bar_link">About</li>
                    </a>
                    <a href="#portfolio">
                        <li className="nav_bar_link">Portfolio</li>
                    </a>
                    <a href="#services">
                        <li className="nav_bar_link">Services</li>
                    </a>
                    <a href="#contact">
                        <li className="nav_bar_link">Contact</li>
                    </a>
                </ul>
                <button
                    className="hamburger"
                    onClick={() => setShowMobileNav(!showMobileNav)}
                >
                    <CiMenuBurger size={28} />
                </button>
            </nav>
        </header>
    );
};

export default NavBar;
