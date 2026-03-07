import { Button } from "./ui/button";
import { Code, Menu, Moon, Sun } from "lucide-react";
import { NavLinks } from "@/scripts/NavLinks";
import { motion } from "framer-motion";
import { useTheme } from "@/context/UseTheme";

interface navBarProps {
  onOpen?: () => void;
}

export default function NavBar({ onOpen }: navBarProps) {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { toggleDarkMode, darkModeOn } = useTheme();

  return (
    <nav className="w-full backdrop-blur-lg shadow-sm xsm:!px-4 md:!px-8 lg:!px-16 !py-2 fixed top-0 z-45 transition-all duration-500 shadow-foreground/5">
      <div className="flex items-center justify-between 2xl:w-3/4 !mx-auto">
        <div className="flex items-center gap-7">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="cursor-pointer"
          >
            <div className="transition-all duration-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] bg-transparent">
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
          </a>
          <div className="flex gap-6 text-navText text-sm font-medium xsm:hidden md:flex">
            {NavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-darkGreen transition-colors duration-200 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            onClick={onOpen}
            className="!px-5 cursor-pointer md:hidden"
            variant="ghost"
          >
            <Menu />
          </Button>
          <Button
            className="!px-5 cursor-pointer xsm:hidden md:flex transition-all duration-300 ease-in-out"
            variant="ghost"
            onClick={toggleDarkMode}
          >
            {darkModeOn ?
              <Sun />
            : <Moon />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
