import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";

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

  return (
    <div>
      {/* Header - Exactly matching Desktop Layout */}
      <div className="flex items-center space-x-3 mb-6">
        <div className={`p-3 rounded-full ${getCategoryBg(phase.category)}`}>
          <div
            className={`text-white bg-gradient-to-br ${getCategoryColor(
              phase.category
            )} rounded-full p-2`}
          >
            {phase.icon}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
          <p className="text-secondary font-medium">
            {phase.period} • {phase.location}
          </p>
        </div>
      </div>

      {/* Description - Exactly matching Desktop Layout */}
      <p className="text-gray-300 mb-8">{phase.description}</p>

      {/* Milestones - Exactly matching Desktop Layout */}
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
};

export default TimelineModalContent;
