import { Code } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="!py-12 border-t border-gray-200 dark:border-gray-800 !mt-20">
      <div className="flex flex-col items-center gap-6">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="cursor-pointer"
        >
          <div className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] bg-transparent flex items-center gap-2">
            <div>
              <h1 className="flex gap-2 items-center">
                Guy{" "}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2.0,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Code size={20} color="#FF6F61" />
                </motion.div>
              </h1>
              <h1 className="!ml-5 text-darkGreen">Stephane</h1>
            </div>
          </div>
        </a>

        <div className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-600 dark:text-gray-400 hover:text-darkGreen dark:hover:text-darkGreen transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} Guy Stephane. All rights reserved.</p>
          <p className="!mt-1">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
