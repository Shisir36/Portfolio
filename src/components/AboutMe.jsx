import React from 'react';
import img from "../assets/images/aboutMe/image.png"

const AboutMe = () => {
    return (
        <section id="about" className="bg-bg_light_primary py-10 overflow-hidden">
            <div className="md:container px-5 mx-auto">
                <h2 className="text-4xl font-bold mb-8">
                    About Me
                </h2>
                <div className="flex flex-col md:flex-row items-center md:items-center">
                 <div >
                 <img
                        src={img}
                        alt="Profile Picture"
                        className=' w-50 h-50'
                        data-aos="fade-right"
                    />
                 </div>
                    <div className="text-gray-800 md:text-left text-center md:mt-0 mt-5" data-aos="fade-left">
                        <h3 className="text-3xl font-bold mb-4">Al Mamun </h3>
                        <p className="text-lg mb-4">
                            I am a passionate web developer currently studying Software Engineering at Daffodil International University.
                        </p>
                        <p className="text-lg">
                            With expertise in HTML, CSS, JavaScript, and React, I create visually stunning and user-friendly websites. I am dedicated to delivering high-quality code and ensuring optimal performance and responsiveness.
                        </p>
                        <p className="text-lg mt-4">
                            I love collaborating with teams and enjoy the creative process of turning ideas into functional and engaging web applications. I continuously expand my knowledge and stay updated with the latest industry trends to provide innovative solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;

