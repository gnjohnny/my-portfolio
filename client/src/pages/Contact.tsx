import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineWhatsapp } from 'react-icons/md';
import { useEmailStore } from '../store/emails.store';

interface Data {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const { loading, sendEmail } = useEmailStore();
    const [info, setInfo] = useState({
        name: '',
        email: '',
        message: '',
    });

    const data: Data = {
        name: info.name,
        email: info.email,
        message: info.message,
    };

    const handleSubmit = (details: any) => {
        sendEmail(details);
        setInfo({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact" id="contact">
            <h1 className="contact_head head_reveal">Contact.</h1>

            <div className="contact_form_container">
                <div className="contact_form_container_content">
                    <h1 className="contact_form_container_content_head">
                        Let's Turn Your <span className="gradient">Dream</span>
                        To <span className="gradient">Reality</span>.Reach Out
                        Today
                    </h1>
                    <h4 className="text-lg font-light text-white/80 word-space">
                        Get in Touch:{' '}
                    </h4>{' '}
                    <div className="social_links">
                        <a href="https://x.com/@DevJohnny50509" target="_blank">
                            <button className="social_link">
                                <FaXTwitter size={20} />
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/johnny-developer/"
                            target="_blank"
                        >
                            <button className="social_link">
                                <FaLinkedinIn size={20} />
                            </button>
                        </a>
                        <a href="https://github.com/gnjohnny" target="_blank">
                            <button className="social_link">
                                <FaGithub size={20} />
                            </button>
                        </a>
                        <a href="https://wa.me/+254717374023" target="_blank">
                            <button className="social_link">
                                <MdOutlineWhatsapp size={20} />
                            </button>
                        </a>
                    </div>
                    <a href="/johnny_cv.pdf" download>
                        <button className="contact_download_btn">
                            Download Resume
                        </button>
                    </a>
                </div>

                <form
                    className="contact_form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit(data);
                    }}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="contact_form_label">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            autoComplete="off"
                            onChange={(e) =>
                                setInfo({ ...info, name: e.target.value })
                            }
                            placeholder="Enter your name..."
                            className="contact_form_input"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="contact_form_label">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            autoComplete="off"
                            onChange={(e) =>
                                setInfo({ ...info, email: e.target.value })
                            }
                            placeholder="Enter your email..."
                            className="contact_form_input"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="contact_form_label">
                            Message:
                        </label>
                        <textarea
                            rows={8}
                            id="message"
                            required
                            autoComplete="off"
                            onChange={(e) =>
                                setInfo({ ...info, message: e.target.value })
                            }
                            placeholder="Enter your message..."
                            className="contact_form_input"
                        />
                    </div>

                    <button className="contact_form_btn" type="submit">
                        {loading ? 'sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
