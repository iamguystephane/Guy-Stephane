import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import acastemLogo from "../../assets/stem-logo.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  liveDemo: string;
  details: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 3,
    title: "AneXiums",
    description:
      "We are a tech startup in Cameroon, providing IT services such as software development, graphic, UI/UX design, picture and editing, etc.",
    image: "https://anexiums.com/assets/Anexiums-light-BozHm4RO.jpg",
    liveDemo: "https://anexiums.com",
    details: "#project-3",
    tags: ["React ", "Express", "Node.js", "MongoDB", "Tailwind"],
  },
  {
    id: 1,
    title: "camctax",
    description:
      "camctax is a platform that brings clarity to Cameroon's business/compliance environment by connecting entrepreneurs to verified business registration, accounting, and tax consultants.",
    image:
      "https://camctax.com/_next/image?url=%2Fimages%2Fhero-image.webp&w=3840&q=75",
    liveDemo: "https://camctax.com",
    details: "#project-1",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind"],
  },
  {
    id: 2,
    title: "Calebrain",
    description:
      "Calebrain is database of Cameroon's legal documents- including laws, decrees, decisions, and related materials. Understand your rights and responsibilities.",
    image: "https://calebrain.com/images/logo.png",
    liveDemo: "https://calebrain.com",
    details: "#project-2",
    tags: ["React", "PostgreSQL", "Node.js", "Express", "Tailwind"],
  },
  {
    id: 5,
    title: "ACA-STEM (Soon to be deployed)",
    description:
      "ACA-STEM is a platform that provides educational resources and support for students and educators in Cameroon.",
    image: acastemLogo,
    liveDemo: "",
    details: "#project-5",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "Stream.io", "Tailwind"],
  },
  {
    id: 11,
    title: "Timetable Management System (Soon to be deployed)",
    description:
      "A timetable management system that allows lecturers in various schools in Cameroon to be able to submit their availabilities from home and a timetable automatically generated and sent to the students.",
    image:
      "https://www.softwaresuggest.com/blog/wp-content/uploads/2020/06/Advantages-of-Time-Table-Management-System-in-Schools.png",
    liveDemo: "",
    details: "#project-5",
    tags: ["Next.js", "Python", "FastAPI", "MongoDB", "Vanilla CSS"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="!py-20">
      <div className="flex flex-col items-center justify-center">
        <Card className="!w-fit !bg-card/50">
          <CardContent className="!px-4 !py-1 flex items-center gap-3">
            Featured Work
          </CardContent>
        </Card>
        <div className="flex items-center gap-3 !mt-6 flex-wrap justify-center">
          <h1 className="font-bold text-4xl">My</h1>
          <h1 className="text-4xl text-gray-500">Projects</h1>
        </div>
        <p className="max-w-2xl text-center !mt-4 px-4">
          A showcase of my recent work spanning web and mobile development.
        </p>
      </div>

      <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !mt-12">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="!bg-card/50 shadow-lg shadow-card/20 overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <CardContent className="!py-5 px-4!">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 my-2!">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs !px-2 !py-1 bg-darkGreen/10 text-darkGreen dark:bg-white/10 dark:text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4!">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="p-3!" variant="outline">
                    <ExternalLink size={16} className="mr-2" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <a
        href="https://github.com/iamguystephane"
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-12!"
      >
        <Card className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
          <CardContent className="!py-8 px-8! flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-darkGreen dark:text-white"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">View More on GitHub</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Explore my repositories and open source contributions
                </p>
              </div>
            </div>
            <Button className="!px-6 !py-5 cursor-pointer !bg-darkGreen text-white hover:!bg-darkGreen/90 shadow-lg shadow-darkGreen/30 group-hover:scale-105 transition-transform duration-300">
              <ExternalLink size={18} className="mr-2" />
              Visit GitHub
            </Button>
          </CardContent>
        </Card>
      </a>
    </section>
  );
};

export default Projects;
