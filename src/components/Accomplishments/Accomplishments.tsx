import React from "react";
import {
  AiOutlineRocket,
  AiOutlineGlobal,
  AiOutlineTrophy,
  AiOutlineSafetyCertificate,
  AiOutlineCode,
  AiOutlineTeam,
} from "react-icons/ai";

interface AccomplishmentData {
  text: string;
  description: string;
  icon: React.ReactNode;
}

const data: AccomplishmentData[] = [
  {
    text: "🏆 Career Transition",
    description:
      "Pivoted from project management in the water industry to web development while relocating across continents.",
    icon: <AiOutlineRocket className="w-8 h-8" />,
  },
  {
    text: "🗣 Language & Learning",
    description:
      "Mastered B1+ German while simultaneously deepening my expertise in web development.",
    icon: <AiOutlineGlobal className="w-8 h-8" />,
  },
  {
    text: "🎓 Full-Stack Circle Scholar",
    description:
      "Selected for the ReDI School Full-Stack Circle program, refining skills through Agile methodologies and real-world applications.",
    icon: <AiOutlineTrophy className="w-8 h-8" />,
  },
  {
    text: "📜 International Degree Recognition",
    description:
      "Bachelor's degree officially recognized by Germany's Kultusministerkonferenz, validating my academic credentials.",
    icon: <AiOutlineSafetyCertificate className="w-8 h-8" />,
  },
  {
    text: "💡 MERN Stack Expertise",
    description:
      "Built functional web applications using MongoDB, Express.js, React.js, and Node.js, solidifying my technical foundation.",
    icon: <AiOutlineCode className="w-8 h-8" />,
  },
  {
    text: "🔗 Multi-Industry Skillset",
    description:
      "Blended engineering, project management, and coding to bring structured problem-solving to development.",
    icon: <AiOutlineTeam className="w-8 h-8" />,
  },
];

const Accomplishments: React.FC = () => {
  return (
    <section className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">Personal Achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((accomplishment, index) => (
          <div
            key={index}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4 text-secondary group-hover:text-white transition-colors duration-300">
              {accomplishment.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 text-center">
              {accomplishment.text}
            </h3>
            <p className="text-gray-300 text-center leading-relaxed">
              {accomplishment.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accomplishments;
