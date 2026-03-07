import { ExternalLink, Info } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

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
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveDemo: "https://example.com/ecommerce",
    details: "#project-1",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team features, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    liveDemo: "https://example.com/taskmanager",
    details: "#project-2",
    tags: ["React", "Firebase", "Tailwind"],
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    description:
      "A mobile application for booking appointments, managing health records, and connecting with healthcare providers.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
    liveDemo: "https://example.com/healthcare",
    details: "#project-3",
    tags: ["React Native", "Express", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Real Estate Platform",
    description:
      "A property listing and management platform with virtual tours, search filters, and agent messaging.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    liveDemo: "https://example.com/realestate",
    details: "#project-4",
    tags: ["Next.js", "Prisma", "MySQL"],
  },
  {
    id: 5,
    title: "Learning Management System",
    description:
      "An educational platform with course creation, student enrollment, progress tracking, and video streaming.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    liveDemo: "https://example.com/lms",
    details: "#project-5",
    tags: ["Vue.js", "Django", "AWS"],
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "A comprehensive analytics dashboard for managing multiple social media accounts and tracking engagement metrics.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveDemo: "https://example.com/dashboard",
    details: "#project-6",
    tags: ["React", "D3.js", "Node.js"],
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
            <CardContent className="!py-5">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
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
              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full !py-5 cursor-pointer !bg-darkGreen text-white hover:!bg-darkGreen/90 shadow-lg shadow-darkGreen/30">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                </a>
                <a href={project.details} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full !py-5 cursor-pointer"
                  >
                    <Info size={16} className="mr-2" />
                    Details
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
