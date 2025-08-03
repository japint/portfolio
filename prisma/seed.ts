import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting to seed database...");

  // Seed Projects
  const projects = [
    {
      title: "MERN Memories",
      description:
        "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
      image: "/images/1.png",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      sourceUrl: "https://github.com/example/mern-memories",
      visitUrl: "https://mern-memories-demo.com",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio.",
      image: "/images/2.png",
      tags: ["React", "JavaScript", "Stripe", "CSS"],
      sourceUrl: "https://github.com/example/ecommerce",
      visitUrl: "https://ecommerce-demo.com",
      featured: true,
    },
    {
      title: "ChatGPT AI App",
      description:
        "Build and Deploy a Fully Functional ChatGPT AI Website with React, providing users with the ability to interact with the ChatGPT API in a seamless and intuitive way.",
      image: "/images/3.jpg",
      tags: ["React", "OpenAI", "API", "TypeScript"],
      sourceUrl: "https://github.com/example/chatgpt-clone",
      visitUrl: "https://chatgpt-clone-demo.com",
      featured: false,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { title: project.title },
      update: {
        ...project,
        tags: JSON.stringify(project.tags),
      },
      create: {
        ...project,
        tags: JSON.stringify(project.tags),
      },
    });
  }

  // Seed Accomplishments
  const accomplishments = [
    { number: 20, text: "Open Source Projects", icon: "projects", order: 1 },
    { number: 1000, text: "Students Taught", icon: "students", order: 2 },
    { number: 1900, text: "Github Followers", icon: "followers", order: 3 },
    { number: 5000, text: "Github Stars", icon: "stars", order: 4 },
  ];

  for (const accomplishment of accomplishments) {
    await prisma.accomplishment.upsert({
      where: { text: accomplishment.text },
      update: accomplishment,
      create: accomplishment,
    });
  }

  // Seed Technologies
  const technologies = [
    { name: "React", icon: "react", category: "Frontend", order: 1 },
    { name: "Next.js", icon: "nextjs", category: "Frontend", order: 2 },
    { name: "TypeScript", icon: "typescript", category: "Frontend", order: 3 },
    { name: "Node.js", icon: "nodejs", category: "Backend", order: 4 },
    { name: "PostgreSQL", icon: "postgresql", category: "Database", order: 5 },
    { name: "Prisma", icon: "prisma", category: "Database", order: 6 },
  ];

  for (const tech of technologies) {
    await prisma.technology.upsert({
      where: { name: tech.name },
      update: tech,
      create: tech,
    });
  }

  // Seed Timeline Events
  const timelineEvents = [
    {
      year: 2024,
      title: "Senior Full Stack Developer",
      text: "Leading development of modern web applications using React, Next.js, and PostgreSQL.",
      order: 1,
    },
    {
      year: 2023,
      title: "Full Stack Developer",
      text: "Developed multiple client projects using MERN stack and modern deployment practices.",
      order: 2,
    },
    {
      year: 2022,
      title: "Frontend Developer",
      text: "Specialized in React development and UI/UX implementation.",
      order: 3,
    },
    {
      year: 2021,
      title: "Started Web Development Journey",
      text: "Began learning web development with HTML, CSS, and JavaScript.",
      order: 4,
    },
  ];

  for (const event of timelineEvents) {
    await prisma.timelineEvent.upsert({
      where: { title: event.title },
      update: event,
      create: event,
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
