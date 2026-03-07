import {
  Code,
  Smartphone,
  Palette,
  Server,
  Database,
  Headphones,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Code size={32} className="text-darkGreen" />,
    title: "Web Development",
    description:
      "Building responsive, modern web applications using React, Next.js, Vue.js, and other cutting-edge technologies.",
  },
  {
    icon: <Smartphone size={32} className="text-darkGreen" />,
    title: "Mobile Development",
    description:
      "Creating cross-platform mobile applications with React Native and Flutter for iOS and Android devices.",
  },
  {
    icon: <Palette size={32} className="text-darkGreen" />,
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered interfaces with modern aesthetics and seamless user experiences.",
  },
  {
    icon: <Server size={32} className="text-darkGreen" />,
    title: "Backend Development",
    description:
      "Developing robust server-side applications with Node.js, Python, and various database technologies.",
  },
  {
    icon: <Database size={32} className="text-darkGreen" />,
    title: "Database Management",
    description:
      "Designing and optimizing database architectures using SQL, NoSQL, and cloud-based solutions.",
  },
  {
    icon: <Headphones size={32} className="text-darkGreen" />,
    title: "IT Consultancy",
    description:
      "Providing expert guidance on technology strategy, system architecture, and digital transformation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="!py-20">
      <div className="flex flex-col items-center justify-center">
        <Card className="!w-fit !bg-card/50">
          <CardContent className="!px-4 !py-1 flex items-center gap-3">
            What I Offer
          </CardContent>
        </Card>
        <div className="flex items-center gap-3 !mt-6 flex-wrap justify-center">
          <h1 className="font-bold text-4xl">My</h1>
          <h1 className="text-4xl text-gray-500">Services</h1>
        </div>
        <p className="max-w-2xl text-center !mt-4 px-4">
          Comprehensive development solutions tailored to bring your ideas to
          life.
        </p>
      </div>

      <div className="grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 !mt-12">
        {services.map((service, index) => (
          <Card
            key={index}
            className="!bg-card/50 shadow-lg shadow-card/20 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
          >
            <CardContent className="!py-8 flex flex-col items-center text-center">
              <div className="!p-4 bg-darkGreen/10 dark:bg-white/10 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
