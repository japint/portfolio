import React, { useState } from "react";
import {
  AiOutlineCalendar,
  AiOutlineDown,
  AiOutlineRight,
} from "react-icons/ai";

interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  text: string;
  category: "development" | "transition" | "career" | "education";
}

const timelineData: TimelineEvent[] = [
  {
    year: "MAR-JUN 2025",
    title: "Full-Stack Web Development",
    company: "REDI School of Digital Integration",
    category: "development",
    text: "Completed comprehensive full-stack program covering PERN stack development. Built and presented a Pinterest Clone using PostgreSQL, Express, React, and Node.js during REDI Demo Day.",
  },
  {
    year: "SEP 2024-JAN 2025",
    title: "React Course",
    company: "Advanced Frontend Development",
    category: "development",
    text: "Mastered React ecosystem including hooks, state management, component architecture, and modern development patterns.",
  },
  {
    year: "MAR-JUN 2024",
    title: "JavaScript Essentials",
    company: "Foundational Programming",
    category: "development",
    text: "Completed comprehensive JavaScript training covering ES6+, DOM manipulation, asynchronous programming, and modern JavaScript patterns.",
  },
  {
    year: "2023-PRESENT",
    title: "German Language Training",
    company: "Sankt Augustin, NRW, Germany",
    category: "transition",
    text: "Completed B1+ German language certification (2023). Currently pursuing B2 German course to enhance professional integration.",
  },
  {
    year: "JAN 2023",
    title: "Relocation to Germany",
    company: "Career Transition",
    category: "transition",
    text: "Relocated from the Philippines to Sankt Augustin, Germany. Began comprehensive career transition from project management to software development.",
  },
  {
    year: "2017-2022",
    title: "Project Manager",
    company: "AEC Water Tech, Philippines",
    category: "career",
    text: "Led water and wastewater projects from planning to execution, ensuring efficient, cost-effective delivery. Oversaw engineering teams and site operations.",
  },
  {
    year: "2013-2017",
    title: "Project in Charge",
    company: "Alpine Systems Corporation, Ph",
    category: "career",
    text: "Drafted wastewater treatment plant layouts and piping systems. Promoted from technical role to Project In-Charge, overseeing site execution.",
  },
  {
    year: "2009-2013",
    title: "AutoCAD Operator",
    company: "MSQP, Saudi Arabia",
    category: "career",
    text: "Prepared HVAC duct designs per SMACNA/ISO standards for projects across KSA and GCC region.",
  },
  {
    year: "2005-2009",
    title: "Bachelor of Science in Information Technology",
    company: "AMA Computer College, Philippines",
    category: "education",
    text: "Completed BSIT degree with hands-on experience in software development, networking, and IT systems.",
  },
];

const Timeline: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0])); // First item expanded by default

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "development":
        return "from-blue-500 to-cyan-500";
      case "transition":
        return "from-purple-500 to-pink-500";
      case "career":
        return "from-green-500 to-emerald-500";
      case "education":
        return "from-orange-500 to-yellow-500";
      default:
        return "from-secondary to-white";
    }
  };

  return (
    <section className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">My Journey</h2>
        <p className="section-subtitle mx-auto max-w-2xl">
          From engineering and project management to software development— a
          timeline of transformation, growth, and international adaptation.
        </p>
      </div>

      {/* Compact Accordion Timeline */}
      <div className="max-w-4xl mx-auto space-y-3">
        {timelineData && timelineData.length > 0 ? (
          timelineData.map((event, index) => {
            const isExpanded = expandedItems.has(index);
            return (
              <div
                key={index}
                className="card hover:shadow-lg transition-all duration-200"
              >
                {/* Header - Always Visible */}
                <div
                  className="flex items-center justify-between cursor-pointer p-4"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    <div
                      className={`w-3 h-8 bg-gradient-to-b ${getCategoryColor(
                        event.category
                      )} rounded-full`}
                    ></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <AiOutlineCalendar className="text-secondary w-4 h-4" />
                        <span className="text-sm font-bold text-secondary">
                          {event.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {event.title}
                      </h3>
                      <p className="text-secondary text-sm font-medium">
                        {event.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-secondary">
                    {isExpanded ? (
                      <AiOutlineDown className="w-5 h-5" />
                    ) : (
                      <AiOutlineRight className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Expandable Content */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-white/10 mt-2">
                    <p className="text-gray-300 leading-relaxed text-sm mt-3">
                      {event.text}
                    </p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="text-center text-gray-300">
            <p>Timeline data not available</p>
          </div>
        )}
      </div>

      {/* Compact Call to Action */}
      <div className="text-center mt-12">
        <div className="card max-w-xl mx-auto p-6">
          <h3 className="text-xl font-bold text-white mb-3">What's Next?</h3>
          <p className="text-gray-300 text-sm mb-4">
            Always looking for new opportunities to grow and contribute to
            exciting projects.
          </p>
          <button className="btn-primary text-sm px-6 py-2">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
