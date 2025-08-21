import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineWhatsapp } from 'react-icons/md';

const Homepage = () => {
    return (
        <div className="homepage" id="home">
            <div className="homepage_content">
                <h1 className="homepage_content_head word-space">
                    WELCOME TO MY TECH SPACE
                </h1>
                <h1 className="homepage_content_banner">
                    Hi, I Am <span className="gradient">Johnny</span> A{' '}
                    <span className="gradient">Web Developer</span> Based In
                    Kenya,
                </h1>
                <p className="homepage_content_text">
                    I specialize in building Fullstack Web Apps. Where I help my
                    clients to bring their ideas into reality by building
                    websites for there companies, brands, businesses and many
                    more.
                </p>

                <div className="social_links">
                    <a href="https://x.com/@DevJohnny50509" target="_blank">
                        <button className="social_link">
                            <FaXTwitter size={38} />
                        </button>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/johnny-developer/"
                        target="_blank"
                    >
                        <button className="social_link">
                            <FaLinkedinIn size={38} />
                        </button>
                    </a>
                    <a href="https://github.com/gnjohnny" target="_blank">
                        <button className="social_link">
                            <FaGithub size={38} />
                        </button>
                    </a>
                    <a href="https://wa.me/+254717374023" target="_blank">
                        <button className="social_link">
                            <MdOutlineWhatsapp size={38} />
                        </button>
                    </a>
                </div>
            </div>
            <div className="homepage_img">
                <img
                    src="/grid1.png"
                    alt=""
                    width={250}
                    height={250}
                    className="w-full h-full"
                />
            </div>
        </div>
    );
};

export default Homepage;
