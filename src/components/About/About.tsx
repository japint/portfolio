import React from "react";
import { AiOutlineUser, AiOutlineGlobal, AiOutlineBook } from "react-icons/ai";

const About: React.FC = () => {
  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="card mb-8">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AiOutlineUser className="w-8 h-8 text-secondary mt-1" />
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                From engineering to web development, my journey has been one of
                transformation and adaptability. Originally a project manager in
                the water industry, I made the bold leap into tech, blending my
                analytical mindset with modern web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <AiOutlineGlobal className="w-8 h-8 text-secondary mt-1" />
            </div>
            <div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Relocating from the Philippines to Germany in 2022, I immersed
                myself in both German language (B2 level) and the MERN stack,
                honing my ability to build impactful web solutions. My
                background equips me with a structured problem-solving approach,
                an eye for detail, and the ability to translate complex ideas
                into functional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
