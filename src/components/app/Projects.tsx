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
    title: "WeCare HR - Digital Healthcare Platform",
    description:
      "An AI-powered healthcare management system with intelligent patient record handling and role-based access control for healthcare professionals.",
    image: `${WeCare}`,
    tags: ["Next.js", "Node.js", "MongoDB", "Chart.js", "Google Gemini AI"],
    githubUrl: "https://github.com/Testitech/weCareEhr",
    liveUrl: "https://team-ehr.vercel.app/home",
  },
  {
    id: 2,
    title: "Staff Onboarding Automation System",
    description:
      "Intelligent workflow automation that streamlines employee onboarding process, reducing manual tasks and ensuring consistent experience for all new hires.",
    image: `${N8N}`,
    tags: ["N8n", "Google sheets", "Notion", "Gmail", "Slack"],
    githubUrl: "https://github.com/Testitech",
    liveUrl: "https://github.com/Testitech",
  },
  {
    id: 3,
    title: "FlexiRide - Car Rental Platform",
    description:
      "A modern car rental platform with intelligent search, real-time availability, secure payment processing, and comprehensive admin features for fleet management.",
    image: `${FlexRide}`,
    tags: ["Next.js", "TypeScript", "Stripe", "Postgres", "Tailwind"],
    githubUrl: "https://github.com/Testitech/car-rental-app",
    liveUrl: "https://team-datadog.vercel.app/",
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
          as={Link}
          className="flex-1"
          color="default"
          radius="full"
          startContent={<FaGithub size={18} />}
          variant="bordered"
        >
          <a href={project.githubUrl} rel="noopener noreferrer" target="_blank">
            Code
          </a>
        </Button>
        <Button
          as={Link}
          className="flex-1"
          color="primary"
          radius="full"
          startContent={<FaExternalLinkAlt size={16} />}
          variant="shadow"
        >
          <a href={project.liveUrl} rel="noopener noreferrer" target="_blank">
            Live Demo
          </a>
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
            radius="full"
            size="lg"
            variant="ghost"
          >
            <a
              href="https://github.com/Testitech"
              rel="noopener noreferrer"
              target="_blank"
            >
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
