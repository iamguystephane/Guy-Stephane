import { motion } from "framer-motion";
import { Code, Sun, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { NavLinks } from "@/scripts/NavLinks";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MenuModal = () => {
  const location = useLocation();
  const getCurrentPath = (url: string) => {
    if (url === location.pathname) {
      return "text-darkGreen";
    }
    return "";
  };

  return (
    <div className="w-full h-screen fixed top-0 backdrop-blur-lg bg-black/10 z-49 flex justify-end">
      <div className="bg-white dark:bg-black h-screen w-[85%] !py-2">
        <div className="flex items-center justify-between !pb-4 border-b border-gray-300 !px-4">
          <div className="cursor-pointer transition-all duration-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.8)] bg-transparent">
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
          <div>
            <Button variant="ghost" className="!px-4">
              <Sun size={20} color="grey" />
            </Button>
            <Button variant="ghost" className="!px-4">
              <X size={20} color="grey" />
            </Button>
          </div>
        </div>
        <div className="!mt-8">
          <h1 className="text-gray-500 text-xl !px-4 "> Menu </h1>
          {NavLinks.map((link) => (
            <Link
              to={link.href}
              key={link.href}
              className="!mt-5 flex items-center justify-between !px-4 !pb-6 border-b border-gray-200"
            >
              <h1 className={`font-medium ${getCurrentPath(link.href)}`}>
                {" "}
                {link.name}{" "}
              </h1>
              <ChevronRight size={20} className={`${getCurrentPath(link.href)}`} />
            </Link>
          ))}
          <div className="!px-4 ">
            <Button variant="outline" className="w-full !py-5 !mt-10">
              LOGIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
