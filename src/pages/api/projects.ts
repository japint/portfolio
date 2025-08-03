import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const projects = await prisma.project.findMany({
          orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
        });

        // Parse tags from JSON string to array for each project
        const projectsWithParsedTags = projects.map((project: any) => ({
          ...project,
          tags: JSON.parse(project.tags || "[]"),
        }));

        res.status(200).json(projectsWithParsedTags);
      } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({ error: "Failed to fetch projects" });
      }
      break;

    case "POST":
      try {
        const {
          title,
          description,
          image,
          tags,
          sourceUrl,
          visitUrl,
          featured,
        } = req.body;

        const project = await prisma.project.create({
          data: {
            title,
            description,
            image,
            tags: JSON.stringify(tags || []), // Store tags as JSON string
            sourceUrl,
            visitUrl,
            featured: featured || false,
          },
        });

        // Return project with parsed tags
        const projectWithParsedTags = {
          ...project,
          tags: JSON.parse(project.tags || "[]"),
        };

        res.status(201).json(projectWithParsedTags);
      } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({ error: "Failed to create project" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
