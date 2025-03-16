const About = () => {
    return (
        <div className="about" id="about">
            <h1 className="about_head head_reveal">About.</h1>
            <div className="about_content">
                <div className="about_info_1 auto_display">
                    <img
                        src="/grid1.png"
                        alt="about image"
                        className="w-full h-[240px]"
                        loading="lazy"
                    />
                    <p className="my-2 fade-in-right">
                        Hi, I'm Johnny Dev, a passionate Full Stack Web
                        Developer with a focus on building dynamic, responsive,
                        and scalable web applications.
                    </p>
                </div>
                <div className="about_info_2 auto_display">
                    <img
                        src="/grid4.png"
                        alt="about image"
                        className="w-full h-[240px]"
                        loading="lazy"
                    />
                    <p className="my-2 fade-in-right">
                        I specialize in the MERN stack (MongoDB, Express, React,
                        and Node.js) and use Tailwind CSS to create clean and
                        modern user interfaces.With a strong foundation in both
                        front-end and back-end development, I enjoy turning
                        complex problems into simple, elegant solutions.
                    </p>
                </div>
                <div className="about_info_3 auto_display">
                    <img
                        src="/digitalbrain.png"
                        alt="about image"
                        className="w-full h-[240px]"
                        loading="lazy"
                    />
                    <p className="my-2 fade-in-right">
                        Whether it's designing intuitive UI/UX or optimizing
                        back-end functionality, I strive to deliver
                        high-performance applications that provide great user
                        experiences.
                    </p>
                </div>
                <div className="about_info_4 auto_display">
                    <img
                        src="/softwares.webp"
                        alt="about image"
                        className="w-full h-[240px]"
                        loading="lazy"
                    />
                    <p className="my-2 fade-in-right">
                        I'm constantly exploring new technologies and best
                        practices, and I love collaborating with clients and
                        teams to bring innovative ideas to life. Let's create
                        something amazing together!
                    </p>
                </div>
                <div className="about_info_5 auto_display">
                    <h1 className="mb-4">Technologies & Programming Lang used</h1>
                    <div className="flex flex-col gap-3 w-full">
                        <div className="w-full gap-3">
                            <h1>HTML/CSS/Javascript</h1>
                            <progress
                                className="progress w-full"
                                value="86"
                                max="100"
                            ></progress>
                        </div>
                        <div className="w-full gap-3">
                            <h1>Typescript</h1>
                            <progress
                                className="progress w-full"
                                value="66"
                                max="100"
                            ></progress>
                        </div>
                        <div className="w-full gap-3">
                            <h1>Node JS/Express Js</h1>
                            <progress
                                className="progress w-full"
                                value="74"
                                max="100"
                            ></progress>
                        </div>
                        <div className="w-full gap-3">
                            <h1>React Js</h1>
                            <progress
                                className="progress w-full"
                                value="82"
                                max="100"
                            ></progress>
                        </div>
                        <div className="w-full gap-3">
                            <h1>Next Js</h1>
                            <progress
                                className="progress w-full"
                                value="60"
                                max="100"
                            ></progress>
                        </div>

                        <h1>DataBase</h1>
                        <div className="w-full gap-3">
                            <h1>Mongo DB</h1>
                            <progress
                                className="progress w-full"
                                value="88"
                                max="100"
                            ></progress>
                        </div>
                        <div className="w-full gap-3">
                            <h1>My Sql</h1>
                            <progress
                                className="progress w-full"
                                value="68"
                                max="100"
                            ></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
