import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineGlobal,
  AiOutlineUser,
  AiOutlineTrophy,
  AiOutlineCode,
  AiOutlineBook,
} from "react-icons/ai";

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

interface TimelineModalContentProps {
  phase: TimelinePhase;
}

const TimelineModalContent: React.FC<TimelineModalContentProps> = ({
  phase,
}) => {
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

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "education":
        return "Foundation & Learning";
      case "career":
        return "Professional Growth";
      case "transition":
        return "Life Transformation";
      case "development":
        return "Technical Evolution";
      case "achievement":
        return "Major Accomplishment";
      default:
        return "Journey Phase";
    }
  };

  const getPhaseDescription = (phase: TimelinePhase) => {
    switch (phase.id) {
      case "foundation":
        return "The foundation years that shaped my technical mindset and professional work ethic. From academic learning to hands-on engineering experience across different countries, this phase built the core skills that would later prove invaluable in my development journey.";
      case "growth":
        return "A period of professional maturation where I transitioned from technical execution to strategic leadership. Managing complex projects and leading teams taught me the importance of communication, planning, and stakeholder management - skills that define great developers.";
      case "transformation":
        return "The boldest chapter of my journey - leaving everything familiar behind to start fresh in a new country. This transformative period required resilience, adaptability, and the courage to pivot careers while learning a new language and culture.";
      case "development":
        return "The current evolution where years of diverse experience converge with modern technology. Combining project management expertise with technical skills to create a unique perspective on software development and problem-solving.";
      default:
        return phase.description;
    }
  };

  const getPhaseSummary = (phase: TimelinePhase) => {
    switch (phase.id) {
      case "foundation":
        return "This foundational phase established my technical foundation and international work experience. The diversity of projects - from HVAC systems in Saudi Arabia to wastewater treatment in the Philippines - taught me to adapt quickly and solve complex technical challenges.";
      case "growth":
        return "The growth phase transformed me from a technical contributor to a strategic leader. Managing multi-million peso projects and coordinating cross-functional teams developed the project management and communication skills that are essential in software development.";
      case "transformation":
        return "The transformation phase represents courage and determination. Successfully relocating internationally while learning German demonstrates the adaptability and persistence that drives my approach to learning new technologies and frameworks.";
      case "development":
        return "The development phase showcases rapid skill acquisition and practical application. In just over a year, I've built production-ready applications and contributed to collaborative projects, proving that diverse experience accelerates learning in new domains.";
      default:
        return "This phase represents a crucial part of my professional journey, building the foundation for future growth and contributing to my unique perspective as a developer with diverse experience.";
    }
  };

  return (
    <div className="space-y-10">
      {/* Progress Indicator */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2">
          {["foundation", "growth", "transformation", "development"].map(
            (phaseId, index) => (
              <div
                key={phaseId}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  phaseId === phase.id
                    ? `bg-gradient-to-r ${getCategoryColor(
                        phase.category
                      )} shadow-lg`
                    : "bg-white/20"
                }`}
              />
            )
          )}
        </div>
      </div>

      {/* Phase Header */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className={`p-4 rounded-full ${getCategoryBg(phase.category)}`}>
            <div
              className={`text-white bg-gradient-to-br ${getCategoryColor(
                phase.category
              )} rounded-full p-3`}
            >
              {phase.icon}
            </div>
          </div>
        </div>

        <div className="mb-2">
          <span
            className={`inline-flex px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${getCategoryColor(
              phase.category
            )} text-white`}
          >
            {getCategoryLabel(phase.category)}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-white mb-3 leading-tight">
          {phase.title}
        </h1>
        <p className="text-xl text-secondary font-semibold mb-3">
          {phase.period}
        </p>

        <div className="flex items-center justify-center text-gray-300 mb-6">
          <AiOutlineGlobal className="w-5 h-5 mr-2" />
          <span className="font-medium">{phase.location}</span>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-3xl mx-auto">
          <p className="text-gray-200 text-lg leading-relaxed">
            {getPhaseDescription(phase)}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center">
        <div
          className={`w-24 h-1 bg-gradient-to-r ${getCategoryColor(
            phase.category
          )} rounded-full`}
        ></div>
      </div>

      {/* Milestones */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Key Milestones & Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the pivotal moments and accomplishments that defined this
            phase of my journey
          </p>
        </div>

        <div className="space-y-8">
          {phase.milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300 shadow-lg"
            >
              {/* Timeline connector for non-first items */}
              {index > 0 && (
                <div className="absolute -top-8 left-10 w-1 h-8 bg-gradient-to-b from-secondary/50 to-transparent"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Enhanced Year Badge */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${getCategoryColor(
                        phase.category
                      )} flex items-center justify-center shadow-lg`}
                    >
                      <AiOutlineCalendar className="text-white w-7 h-7" />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <span className="text-xs font-bold text-secondary bg-secondary/20 px-2 py-1 rounded-full border border-secondary/30 whitespace-nowrap">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="flex-1 min-w-0">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                      {milestone.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <p className="text-secondary font-semibold text-lg">
                        {milestone.company}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 mb-4 border-l-4 border-secondary/50">
                    <p className="text-gray-200 leading-relaxed text-base">
                      {milestone.achievement}
                    </p>
                  </div>

                  {/* Enhanced Skills Section */}
                  {milestone.skills && milestone.skills.length > 0 && (
                    <div className="mt-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <AiOutlineCode className="text-secondary w-5 h-5" />
                        <h4 className="text-lg font-semibold text-white">
                          Skills & Technologies
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {milestone.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-4 py-2 text-sm font-medium bg-secondary/20 text-secondary rounded-full border border-secondary/30 hover:bg-secondary/30 hover:scale-105 transition-all duration-200 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Phase Summary */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-primary/20 to-secondary/10 rounded-2xl blur-sm"></div>
        <div className="relative bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div
                className={`p-3 rounded-full bg-gradient-to-br ${getCategoryColor(
                  phase.category
                )}`}
              >
                <AiOutlineTrophy className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Phase Impact & Legacy
            </h3>
            <p className="text-gray-200 leading-relaxed text-lg max-w-3xl mx-auto">
              {getPhaseSummary(phase)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineModalContent;
