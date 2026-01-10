import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { FaCode, FaCogs, FaDatabase, FaPaintBrush } from "react-icons/fa";

interface SkillCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building modern, responsive, and interactive user interfaces",
    icon: <FaCode className="text-3xl" />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Backend & Database",
    description:
      "Robust and scalable server-side applications with modern databases",
    icon: <FaDatabase className="text-3xl" />,
    skills: ["Node.js", "REST API", "PostgreSQL", "Drizzle ORM"],
  },
  {
    id: 3,
    title: "Automation & Integration",
    description: "Streamlining workflows with intelligent automation solutions",
    icon: <FaCogs className="text-3xl" />,
    skills: ["n8n", "Make", "Zapier", "Airtable"],
  },
  {
    id: 4,
    title: "Design & Prototyping",
    description: "Creating beautiful and functional user experiences",
    icon: <FaPaintBrush className="text-3xl" />,
    skills: ["Figma", "UI/UX Design", "Responsive Design"],
  },
];

function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <Card className="border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
      <CardBody className="p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-blue-400/20 text-primary">
            {category.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-default-900 mb-2">
              {category.title}
            </h3>
            <p className="text-sm text-default-600">{category.description}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {category.skills.map((skill) => (
            <Chip
              key={skill}
              className="font-medium"
              color="primary"
              size="md"
              variant="flat"
            >
              {skill}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}

export default function SkillsSection() {
  return (
    <section className="w-full py-20" id="skills">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Tech{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-lg text-default-600 max-w-2xl mx-auto">
            Building robust and scalable applications with modern technologies
            for both frontend and backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 via-blue-400/10 to-primary/10 border border-primary/20">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Full-Stack Developer & Automation Expert
              </h3>
              <p className="text-default-700 mx-auto leading-relaxed">
                With expertise spanning modern web technologies and intelligent
                automation platforms, I deliver end-to-end solutions that drive
                efficiency and innovation. From pixel-perfect interfaces to
                scalable backend systems and automated workflows.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
