import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import WeCare from "@/images/weCare.jpg";
import N8N from "@/images/n8n.jpg";
import FlexRide from "@/images/car-rental.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart management, payment integration, and admin dashboard.",
    image: `${WeCare}`,
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://your-ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Task Automation Tool",
    description:
      "Automated workflow system that streamlines repetitive tasks and integrates with popular services.",
    image: `${N8N}`,
    tags: ["Python", "Selenium", "FastAPI", "Docker"],
    githubUrl: "https://github.com/yourusername/automation-tool",
    liveUrl: "https://automation-demo.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description:
      "Real-time analytics dashboard with data visualization and interactive charts for portfolio tracking.",
    image: `${FlexRide}`,
    tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js"],
    githubUrl: "https://github.com/yourusername/dashboard",
    liveUrl: "https://dashboard-demo.vercel.app",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      isPressable
      className="group hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Project Image */}
      <CardHeader className="p-0 overflow-hidden">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>

      {/* Project Details */}
      <CardBody className="px-4 py-4 space-y-3">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-default-600 text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Chip key={tag} color="primary" size="sm" variant="flat">
              {tag}
            </Chip>
          ))}
        </div>
      </CardBody>

      {/* Action Buttons */}
      <CardFooter className="px-4 pb-4 gap-3">
        <Button
          isExternal
          as={Link}
          className="flex-1"
          color="default"
          href={project.githubUrl}
          radius="full"
          startContent={<FaGithub size={18} />}
          variant="bordered"
        >
          Code
        </Button>
        <Button
          isExternal
          as={Link}
          className="flex-1"
          color="primary"
          href={project.liveUrl}
          radius="full"
          startContent={<FaExternalLinkAlt size={16} />}
          variant="shadow"
        >
          Live Demo
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section className="w-full py-20" id="projects">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Here are some of my recent works. Each project showcases different
            skills and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            isExternal
            as={Link}
            color="primary"
            href="https://github.com/yourusername"
            radius="full"
            size="lg"
            variant="ghost"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
