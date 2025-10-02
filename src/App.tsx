import { Button } from "./components/ui/button";
import { Github } from "lucide-react";

export default function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <h1 className="font-bold text-4xl"> Hello world, </h1>
      <p className="text-center">
        This portfolio is currently under development... please come back later.
      </p>
      <a href="https://www.github.com/iamguystephane">
        <Button className="cursor-pointer !px-8 !py-2" variant="outline">
          Visit GitHuB <Github />
        </Button>
      </a>
    </div>
  );
}
