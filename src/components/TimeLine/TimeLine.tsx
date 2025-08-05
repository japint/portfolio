import React, { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineTrophy,
  AiOutlineCode,
  AiOutlineBook,
} from "react-icons/ai";
import Modal from "../Modal/Modal";
import TimelineModalContent from "../Modal/TimelineModalContent";

interface TimelinePhase {
  id: string;
  title: string;
  period: string;
  description: string;
  location: string;
  category:
    | "education"
    | "career"
    | "transition"
    | "development"
    | "achievement";
  icon: React.ReactNode;
  milestones: {
    year: string;
    title: string;
    company: string;
    achievement: string;
    skills?: string[];
  }[];
}

const journeyPhases: TimelinePhase[] = [
  {
    id: "foundation",
    title: "Foundation Era",
    period: "2002-2017",
    description: "Building technical expertise and engineering mindset",
    location: "Philippines & Saudi Arabia",
    category: "education",
    icon: <AiOutlineBook className="w-6 h-6" />,
    milestones: [
      {
        year: "2002-2006",
        title: "Bachelor of Science in Information Technology",
        company: "AMA Computer College, Philippines",
        achievement: "BSIT degree with software development foundation",
        skills: ["Programming", "Networking", "IT Systems"],
      },
      {
        year: "2009-2013",
        title: "AutoCAD Operator",
        company: "MSQP, Saudi Arabia",
        achievement: "HVAC design expertise across KSA and GCC region",
        skills: ["AutoCAD", "HVAC Design", "SMACNA Standards"],
      },
      {
        year: "2013-2017",
        title: "Project In-Charge",
        company: "Alpine Systems Corporation, Philippines",
        achievement:
          "Promoted to leadership role in wastewater treatment projects",
        skills: ["Project Management", "Technical Drawing", "Team Leadership"],
      },
    ],
  },
  {
    id: "growth",
    title: "Growth & Leadership",
    period: "2017-2022",
    description: "Advancing to project management and technical leadership",
    location: "Philippines",
    category: "career",
    icon: <AiOutlineUser className="w-6 h-6" />,
    milestones: [
      {
        year: "2017-2022",
        title: "Project Manager",
        company: "AEC Water Tech, Philippines",
        achievement:
          "Led water and wastewater projects from planning to execution",
        skills: [
          "Project Management",
          "Team Leadership",
          "Cost Control",
          "Site Operations",
        ],
      },
    ],
  },
  {
    id: "transformation",
    title: "Transformation Journey",
    period: "2022-2023",
    description: "International relocation and career pivot preparation",
    location: "Germany",
    category: "transition",
    icon: <AiOutlineGlobal className="w-6 h-6" />,
    milestones: [
      {
        year: "JAN 2023",
        title: "Relocation to Germany",
        company: "Career Transition",
        achievement:
          "Successfully relocated from Philippines to Sankt Augustin, Germany",
        skills: ["Cultural Adaptation", "Language Learning"],
      },
      {
        year: "2023-PRESENT",
        title: "German Language Training",
        company: "Sankt Augustin, NRW, Germany",
        achievement: "Completed B1+ certification, currently pursuing B2 level",
        skills: ["German Language (B2)", "Cultural Integration"],
      },
    ],
  },
  {
    id: "development",
    title: "Developer Evolution",
    period: "2024-2025",
    description: "Mastering modern web development and full-stack technologies",
    location: "Germany",
    category: "development",
    icon: <AiOutlineCode className="w-6 h-6" />,
    milestones: [
      {
        year: "MAR-JUN 2024",
        title: "JavaScript Essentials",
        company: "Foundational Programming",
        achievement:
          "Mastered ES6+, DOM manipulation, and asynchronous programming",
        skills: ["JavaScript ES6+", "DOM Manipulation", "Async Programming"],
      },
      {
        year: "SEP 2024-JAN 2025",
        title: "React Mastery",
        company: "Advanced Frontend Development",
        achievement: "Mastered React ecosystem and modern development patterns",
        skills: [
          "React",
          "Hooks",
          "State Management",
          "Component Architecture",
        ],
      },
      {
        year: "MAR-JUN 2025",
        title: "Full-Stack Web Development",
        company: "REDI School of Digital Integration",
        achievement:
          "Completed comprehensive PERN stack program with Pinterest Clone project",
        skills: [
          "PostgreSQL",
          "Express",
          "React",
          "Node.js",
          "Prisma",
          "PERN Stack",
        ],
      },
    ],
  },
];

const Timeline: React.FC = () => {
  const [activePhase, setActivePhase] = useState<string | null>("development");
  const [modalPhase, setModalPhase] = useState<TimelinePhase | null>(null);

  const openModal = (phase: TimelinePhase) => {
    setModalPhase(phase);
  };

  const closeModal = () => {
    setModalPhase(null);
  };

  const handlePhaseClick = (phase: TimelinePhase) => {
    // Only open modal on mobile/tablet, use hover detail on desktop
    const isMobile = window.innerWidth < 1024; // lg breakpoint
    if (isMobile) {
      openModal(phase);
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education":
        return "from-orange-500 to-yellow-500";
      case "career":
        return "from-green-500 to-emerald-500";
      case "transition":
        return "from-purple-500 to-pink-500";
      case "development":
        return "from-blue-500 to-cyan-500";
      case "achievement":
        return "from-amber-500 to-orange-500";
      default:
        return "from-secondary to-white";
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case "education":
        return "bg-orange-500/20";
      case "career":
        return "bg-green-500/20";
      case "transition":
        return "bg-purple-500/20";
      case "development":
        return "bg-blue-500/20";
      case "achievement":
        return "bg-amber-500/20";
      default:
        return "bg-secondary/20";
    }
  };

  return (
    <section id="timeline" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle mx-auto max-w-3xl">
          From engineering foundations to full-stack development — a story of
          transformation, international adaptation, and continuous learning
          across three countries and two decades.
        </p>
        <p className="text-gray-400 text-sm mt-4 opacity-75">
          <span className="hidden lg:inline">
            Hover over phases to explore detailed milestones and achievements
          </span>
          <span className="lg:hidden">
            Tap on phases to explore detailed milestones and achievements
          </span>
        </p>
      </div>

      {/* Journey Phases */}
      <div className="max-w-6xl mx-auto">
        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Timeline Line */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-green-500 to-blue-500 rounded-full"></div>

          <div className="grid grid-cols-4 gap-8">
            {journeyPhases.map((phase, index) => (
              <div key={phase.id} className="relative">
                {/* Phase Marker */}
                <div className="absolute top-28 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary border-4 border-white rounded-full shadow-lg z-10"></div>

                {/* Phase Card */}
                <div
                  className={`card p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg group ${
                    activePhase === phase.id
                      ? "ring-2 ring-secondary shadow-xl"
                      : ""
                  }`}
                  onMouseEnter={() => setActivePhase(phase.id)}
                >
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${getCategoryBg(
                      phase.category
                    )} mb-4 group-hover:scale-110 transition-transform duration-200`}
                  >
                    <div
                      className={`text-white bg-gradient-to-br ${getCategoryColor(
                        phase.category
                      )} rounded-full p-2`}
                    >
                      {phase.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-sm font-medium text-secondary mb-2">
                    {phase.period}
                  </p>
                  <p className="text-xs text-gray-300 mb-3 group-hover:text-gray-200 transition-colors duration-200">
                    {phase.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <AiOutlineGlobal className="w-3 h-3 mr-1" />
                      {phase.location}
                    </div>
                    <div className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      hover to explore
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {journeyPhases.map((phase, index) => (
            <div key={phase.id} className="relative">
              {/* Vertical Line */}
              {index < journeyPhases.length - 1 && (
                <div
                  className={`absolute left-6 top-16 w-1 h-20 bg-gradient-to-b ${getCategoryColor(
                    phase.category
                  )}`}
                ></div>
              )}

              <div className="flex items-start space-x-4">
                {/* Phase Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full ${getCategoryBg(
                    phase.category
                  )} flex items-center justify-center`}
                >
                  <div
                    className={`text-white bg-gradient-to-br ${getCategoryColor(
                      phase.category
                    )} rounded-full p-2`}
                  >
                    {phase.icon}
                  </div>
                </div>

                {/* Phase Content - Now Interactive */}
                <div
                  className={`card flex-1 p-4 cursor-pointer transition-all duration-300 hover:shadow-lg group ${
                    activePhase === phase.id
                      ? "ring-2 ring-secondary shadow-xl"
                      : ""
                  }`}
                  onClick={() => handlePhaseClick(phase)}
                >
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-secondary transition-colors duration-200">
                    {phase.title}
                  </h3>
                  <p className="text-sm font-medium text-secondary mb-2">
                    {phase.period}
                  </p>
                  <p className="text-sm text-gray-300 mb-3 group-hover:text-gray-200 transition-colors duration-200">
                    {phase.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <AiOutlineGlobal className="w-3 h-3 mr-1" />
                      {phase.location}
                    </div>
                    <div className="text-gray-500 text-xs opacity-50 group-hover:opacity-100 transition-opacity duration-200">
                      tap for details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Detailed View - Hidden on Mobile */}
        {activePhase && (
          <div className="mt-16 hidden lg:block">
            <div className="card p-8">
              {(() => {
                const phase = journeyPhases.find((p) => p.id === activePhase);
                if (!phase) return null;

                return (
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div
                        className={`p-3 rounded-full ${getCategoryBg(
                          phase.category
                        )}`}
                      >
                        <div
                          className={`text-white bg-gradient-to-br ${getCategoryColor(
                            phase.category
                          )} rounded-full p-2`}
                        >
                          {phase.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {phase.title}
                        </h3>
                        <p className="text-secondary font-medium">
                          {phase.period} • {phase.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-8">{phase.description}</p>

                    <div className="space-y-6">
                      {phase.milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-secondary/30 pl-6 relative"
                        >
                          <div className="absolute -left-2 top-2 w-4 h-4 bg-secondary rounded-full"></div>
                          <div className="flex items-center space-x-2 mb-2">
                            <AiOutlineCalendar className="text-secondary w-4 h-4" />
                            <span className="text-sm font-bold text-secondary">
                              {milestone.year}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-white mb-1">
                            {milestone.title}
                          </h4>
                          <p className="text-secondary text-sm font-medium mb-2">
                            {milestone.company}
                          </p>
                          <p className="text-gray-300 text-sm mb-3">
                            {milestone.achievement}
                          </p>
                          {milestone.skills && (
                            <div className="flex flex-wrap gap-2">
                              {milestone.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 py-1 text-xs bg-secondary/20 text-secondary rounded-full border border-secondary/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Mobile Timeline Modal - Only on Mobile */}
        <Modal
          isOpen={!!modalPhase}
          onClose={closeModal}
          title={modalPhase?.title}
        >
          {modalPhase && <TimelineModalContent phase={modalPhase} />}
        </Modal>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="card max-w-2xl mx-auto p-8">
            <div className="flex items-center justify-center mb-4">
              <AiOutlineTrophy className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">What's Next?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With a solid foundation in full-stack development and a unique
              background in project management, I'm excited to contribute to
              innovative projects and continue growing as a developer.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                DevOps
              </span>
              <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full border border-purple-500/30">
                Cloud Architecture
              </span>
              <span className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full border border-orange-500/30">
                AI/ML Integration
              </span>
            </div>
            <button className="btn-primary">
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
