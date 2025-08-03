import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineEye,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { projects, Project } from "../../constants/constants";

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">The Lab: Where My Ideas Come to Life</h2>
        <p className="section-subtitle mx-auto">
          A showcase of my latest projects, demonstrating my expertise in
          full-stack development, problem-solving, and user experience design.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project: Project) => (
          <div
            key={project.id}
            className="card group hover:scale-105 transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  aria-label="View live project"
                >
                  <AiOutlineEye className="w-6 h-6 text-white" />
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                  aria-label="View source code"
                >
                  <AiOutlineGithub className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-300 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-secondary">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full border border-secondary/30 hover:bg-secondary/30 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex space-x-4 pt-4">
                <a
                  href={project.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-secondary hover:text-white transition-colors duration-200 group/link"
                >
                  <span className="text-sm font-medium">Live Demo</span>
                  <AiOutlineArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <AiOutlineGithub className="w-4 h-4" />
                  <span className="text-sm font-medium">Source</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>{" "}
      {/* View All Projects Button */}
      <div className="text-center mt-12">
        <button className="btn-outline group">
          <span>View All Projects</span>
          <AiOutlineArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
