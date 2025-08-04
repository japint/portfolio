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
    title: "1010 Bike Shop",
    description:
      "Modern bike e-commerce platform featuring product catalog, responsive design, and seamless user experience. Built with Next.js for optimal performance and scalability.",
    image: "/images/1010bike.png",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "TypeScript",
      "CI/CD with Vercel",
    ],
    source: "https://github.com/japint/1010bike",
    visit: "https://1010bike.vercel.app/",
  },
  {
    id: 1,
    title: "Tattoo Web Studio",
    description:
      "Professional tattoo studio website with artist portfolios, booking system, gallery showcase, and a modern, responsive design with smooth animations.",
    image: "/images/tattoo.png",
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "TypeScript",
      "CI/CD with Vercel",
    ],
    source: "https://github.com/japint/tattoo-web-studio",
    visit: "https://tattoo-web-studio.vercel.app/",
  },
  {
    id: 2,
    title: "Wedding Invitation RSVP",
    description:
      "Elegant wedding invitation website with RSVP, guest management, and event details. Designed for a beautiful, responsive, and seamless guest experience.",
    image: "/images/wed.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "CI/CD with Vercel",
    ],
    source: "https://github.com/japint/tailwind3",
    visit: "https://heinrichandcristina.vercel.app/",
  },
  {
    id: 3,
    title: "Multi Intake Fill up form for website",
    description:
      "Dynamic multi-step intake form with validation, progress tracking, and a seamless user experience for efficient data collection.",
    image: "/images/form-intake.png",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "CI/CD with Vercel",
    ],
    source: "https://github.com/japint/vercel-deploy",
    visit: "https://multi-intake-form.vercel.app/",
  },
  {
    id: 4,
    title: "FullStack Circle | pinterest-clone",
    description:
      "Collaboratively Built a full-stack image-sharing app in 14 weeks using Agile/Scrum; showcased at REDI Demo Day.",
    image: "/images/1.png",
    tags: [
      "FullStack",
      "Scrum",
      "PostgreSQL",
      "Express",
      "React",
      "Node.js",
      "Prisma",
      "MVC Architecture",
      "REST API",
      "Agile",
    ],
    source: "https://github.com/ReDI-School/S25-Full-Stack-Circle",
    visit: "https://pinterest-clone-angelo.vercel.app",
  },
  {
    id: 5,
    title: "todo-app",
    description:
      "Built a solo to-do app with full CRUD and responsive UI using core JavaScript for seamless task management.",
    image: "/images/todo-app.png",
    tags: ["FullStack", "MERN", "JavaScript", "React", "Node.js", "Express"],
    source: "https://github.com/japint/todo-app/tree/main",
    visit: "https://todo-app-2ved.onrender.com/",
  },
  {
    id: 6,
    title: "tee-teilen",
    description:
      "TeaTeilen is a simple, responsive website where tea enthusiasts share their favorite tea experiences. A beginner project showcasing fundamental web development and an engaging user experience.",
    image: "/images/tee-teilen.png",
    tags: ["vanilla html + css + JavaScript", "Responsive Design"],
    source: "https://github.com/japint/project-teeteilen",
    visit: "https://teeteilen.netlify.app",
  },
  {
    id: 7,
    title: "eCommerce Platform",
    description:
      "Upcoming full-stack e-commerce platform built with Next.js and PostgreSQL. Features product catalog, shopping cart, user authentication, payment integration, and admin dashboard for inventory management.",
    image: "/images/2.png",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "Prisma"],
    source: "https://github.com/japint/ecommerce-platform",
    visit: "https://ecommerce-angelo.vercel.app",
  },
  {
    id: 8,
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
