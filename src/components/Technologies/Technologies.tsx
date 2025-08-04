import React from "react";
import {
  DiReact,
  DiNodejsSmall,
  DiPostgresql,
  DiMongodb,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiGitBranch,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiPrismic,
  SiNetlify,
  SiGithub,
  SiVercel,
  SiNpm,
  SiPostman,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface TechCategory {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
}

const Technologies: React.FC = () => {
  const techCategories: TechCategory[] = [
    {
      title: "Front-End Arsenal",
      description:
        "🚀 React.js, React Router, Axios – Creating dynamic, responsive, and interactive user interfaces.",
      icon: <DiReact size="3rem" className="text-blue-400" />,
      technologies: [
        { name: "React", icon: <DiReact className="w-6 h-6" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-6 h-6" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="w-6 h-6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6" /> },
        { name: "HTML5", icon: <DiHtml5 className="w-6 h-6" /> },
        { name: "CSS3", icon: <DiCss3 className="w-6 h-6" /> },
      ],
    },
    {
      title: "Back-End Foundation",
      description:
        "🛠 Node.js, Express, MongoDB, PostgreSQL, Prisma – Building scalable and efficient server-side solutions.",
      icon: <DiNodejsSmall size="3rem" className="text-green-400" />,
      technologies: [
        { name: "Node.js", icon: <DiNodejsSmall className="w-6 h-6" /> },
        { name: "Next.js API", icon: <SiNextdotjs className="w-6 h-6" /> },
        { name: "MongoDB", icon: <DiMongodb className="w-6 h-6" /> },
        { name: "PostgreSQL", icon: <DiPostgresql className="w-6 h-6" /> },
        { name: "Prisma", icon: <SiPrismic className="w-6 h-6" /> },
      ],
    },
    {
      title: "Tools & Deployment",
      description: "Modern development workflow and deployment platforms",
      icon: <SiNetlify size="3rem" className="text-white" />,
      technologies: [
        { name: "Git", icon: <DiGitBranch className="w-6 h-6" /> },
        { name: "GitHub", icon: <SiGithub className="w-6 h-6" /> },
        { name: "VS Code", icon: <VscCode className="w-6 h-6" /> },
        { name: "Netlify", icon: <SiNetlify className="w-6 h-6" /> },
        { name: "Vercel", icon: <SiVercel className="w-6 h-6" /> },
        { name: "NPM", icon: <SiNpm className="w-6 h-6" /> },
        { name: "Postman", icon: <SiPostman className="w-6 h-6" /> },
      ],
    },
  ];

  return (
    <section id="tech" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">
          My Toolkit: Crafting Digital Experiences
        </h2>
        <p className="section-subtitle mx-auto">
          A curated selection of tools and technologies that bring my ideas to
          life.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {techCategories && techCategories.length > 0 ? (
          techCategories.map((category, index) => (
            <div key={index} className="card group">
              <div className="flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {category.title}
              </h3>

              <p className="text-gray-300 text-center mb-6 leading-relaxed">
                {category.description}
              </p>

              <div className="grid grid-cols-2 gap-3">
                {category.technologies && category.technologies.length > 0 ? (
                  category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 group/tech"
                    >
                      <div className="text-secondary group-hover/tech:text-white transition-colors duration-200">
                        {tech.icon}
                      </div>
                      <span className="text-gray-300 font-medium text-sm">
                        {tech.name}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 text-center text-gray-300 text-sm">
                    <p>No technologies listed</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-300">
            <p>Loading technologies...</p>
          </div>
        )}
      </div>

      {/* Skills Progress Section */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-white text-center mb-12">
          Proficiency Level
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { skill: "React/Next.js", level: 95 },
            { skill: "TypeScript", level: 90 },
            { skill: "Node.js", level: 85 },
            { skill: "PostgreSQL/Prisma", level: 88 },
            { skill: "Tailwind CSS", level: 92 },
            { skill: "UI/UX Design", level: 80 },
          ].map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">{skill.skill}</span>
                <span className="text-secondary font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-secondary to-white rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
