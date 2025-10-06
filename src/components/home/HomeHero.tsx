import { ArrowRight, Code } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <div className="grid xsm:grid-cols-1 md:grid-cols-2 gap-6 px-4 ">
      <div className="max-w-lg">
        <Card className="!w-fit">
          <CardContent className="!px-4 !py-1 flex items-center gap-3">
            <Code /> Full-Stack Web/Mobile Dev
          </CardContent>
        </Card>
        <div className="flex items-center gap-3 !mt-6 text-4xl">
          <h1>Guy</h1>
          <h1 className="font-bold">Stephane</h1>
          <a href="" className="">
            <Button className="!cursor-pointer !px-3 rounded-full shadow !bg-card">
              <ArrowRight className="-rotate-45 text-foreground" />
            </Button>
          </a>
        </div>
        <p>
          I’m a passionate full-stack developer skilled in building modern web
          and mobile applications with clean design, efficient code, and
          seamless user experiences.
        </p>
        <div className="flex gap-4 items-center">
          <Link to="/projects">
            <Button className="!px-5 !py-6 !rounded-full !mt-6 cursor-pointer !bg-darkGreen text-white hover:!bg-darkGreen/90 shadow-lg shadow-darkGreen/30">
              View Projects
            </Button>
          </Link>
          <Link to="/projects">
            <Button className="!px-5 !py-6 !rounded-full !mt-6 cursor-pointer">
              Contact Now
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap">
        <Card className="!w-fit !bg-card/50 shadow-lg shadow-card/20 -rotate-7 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-0">
          <CardContent className="!px-6 !py-8 max-w-sm">
            "working with Guy was a game-changer for our project. His expertise
            in full-stack development and attention to detail brought our vision
            to life. Highly recommend!"
          </CardContent>
        </Card>
        <Card className="!w-fit !bg-card/50 shadow-lg shadow-card/20 rotate-7 transition-all duration-300 ease-in-out hover:scale-105 hover:rotate-0">
          <CardContent className="!px-6 !py-8 max-w-sm">
            "Guy's dedication and skill transformed our ideas into a
            user-friendly application. His ability to seamlessly integrate front
            and back-end technologies is impressive. A true professional!"
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
