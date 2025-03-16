import { useState } from 'react';
import MobileNav from './components/MobileNav';
import NavBar from './components/NavBar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio';

const App = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    return (
        <>
            <NavBar
                showMobileNav={showMobileNav}
                setShowMobileNav={setShowMobileNav}
            />
            <MobileNav
                showMobileNav={showMobileNav}
                setShowMobileNav={setShowMobileNav}
            />
            <main className="main">
                <Homepage />
                <hr className="w-1/2 mx-auto text-[var(--accent)] z-30 my-6 font-bold" />
                <About />
                <hr className="w-1/2 mx-auto text-[var(--accent)] z-30 my-6 font-bold" />
                <Portfolio/>
                <hr className="w-1/2 mx-auto text-[var(--accent)] z-30 my-6 font-bold" />
                <Services />
                <hr className="w-1/2 mx-auto text-[var(--accent)] z-30 my-6 font-bold" />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;
