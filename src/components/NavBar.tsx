import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Code } from "lucide-react";
import { NavLinks } from "@/scripts/NavLinks";

export default function NavBar() {
  return (
    <>
      <nav className="w-full flex items-center justify-between backdrop-blur-lg shadow-sm dark:bg-black dark:text-white text-black xsm:!px-4 md:!px-8 lg:!px-16 !py-2 fixed top-0">
        <div className="flex items-center gap-7">
          <div>
            <h1 className="flex gap-2 items-center">
              Guy <Code size={20} color="#FF6F61" />{" "}
            </h1>
            <h1 className="!ml-5 text-darkGreen">Stephane</h1>
          </div>
          <div className="flex gap-6 text-gray-500 text-sm font-medium">
            {NavLinks.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-slate">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <Button variant="outline" className="!px-5 !py-2 cursor-pointer">
          {" "}
          LOGIN{" "}
        </Button>
      </nav>
    </>
  );
}
