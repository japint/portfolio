export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Pinterest Clone",
    description:
      "Full-stack PERN application with MVC architecture, PostgreSQL + Prisma ORM. Presented during REDI Demo Day. Features user authentication, image uploads, board creation, and pin management with a responsive design.",
    image: "/images/1.png",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "Prisma"],
    source: "https://github.com/japint/pinterest-clone",
    visit: "https://pinterest-clone-angelo.vercel.app",
  },
  {
    id: 1,
    title: "eCommerce Platform",
    description:
      "Upcoming full-stack e-commerce platform built with Next.js and PostgreSQL. Features product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
    image: "/images/2.png",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Prisma"],
    source: "https://github.com/japint/ecommerce-platform",
    visit: "https://ecommerce-angelo.vercel.app",
  },
  {
    id: 2,
    title: "Developer Collaboration Platform",
    description:
      "Ongoing collaborative project featuring FastAPI backend with Next.js frontend. Real-time collaboration tools, project management features, and developer community integration.",
    image: "/images/3.jpg",
    tags: ["FastAPI", "Next.js", "PostgreSQL", "Python"],
    source: "https://github.com/japint/dev-collaboration",
    visit: "https://dev-collab-angelo.vercel.app",
  },
];

export interface TimeLineItem {
  year: string;
  text: string;
}

export const TimeLineData: TimeLineItem[] = [
  {
    year: "2005",
    text: "Started Bachelor of Science in Information Technology",
  },
  { year: "2009", text: "Worked as AutoCAD Operator in Saudi Arabia" },
  { year: "2013", text: "Promoted to Project In-Charge at Alpine Systems" },
  { year: "2017", text: "Became Project Manager at AEC Water Tech" },
  { year: "2023", text: "Relocated to Germany and started career transition" },
  { year: "2024", text: "Completed JavaScript and React training" },
  { year: "2025", text: "Graduated Full-Stack Web Development at REDI School" },
];
