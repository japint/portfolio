import React from "react";
import { AiOutlineDownload, AiOutlineArrowRight } from "react-icons/ai";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    // Direct download from public/cv folder
    const link = document.createElement("a");
    link.href = "/cv/CV_Angelo_Centeno.pdf";
    link.download = "Angelo_Centeno_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 relative">
      <BackgroundAnimation />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent mb-4 pb-2">
                Angelo Centeno
              </span>
              <span className="block text-white text-2xl md:text-3xl lg:text-4xl font-medium">
                Full-Stack Web Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Transforming Ideas into Seamless Digital Experiences
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              From project management in water engineering to full-stack web
              development, I bring a unique perspective to software creation.
              Based in Germany, I specialize in PERN stack development and
              modern JavaScript technologies. My journey from the Philippines to
              Europe has shaped my adaptable, solution-focused approach to
              building applications that make a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <span>View My Work</span>
                <AiOutlineArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={handleDownloadCV}
                className="btn-outline flex items-center justify-center space-x-2"
              >
                <AiOutlineDownload className="w-5 h-5" />
                <span>Download CV</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 relative">
              {/* Profile Image Container */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary/20 to-transparent animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-secondary/10 to-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <img
                  src="/images/profile.jpeg"
                  alt="Angelo Centeno - Full-Stack Web Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
