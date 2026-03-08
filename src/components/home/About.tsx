import {
  Circle,
  Dot,
  Download,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import cvFile from "../../assets/GUY STEPHANE'S CV.pdf";
import GS from "../../assets/Guy-Stephane.png";

const HomePageAbout = () => {
  const experiences: { name: string; location: string; date: string }[] = [
    { name: "Freelance", location: "N/A", date: "2020 - Present" },
    { name: "Web Developer", location: "AneXiums", date: "2025 - Present" },
    { name: "Trainer", location: "Eschosys Tech", date: "2023 - Present" },
    { name: "Lecturer", location: "Eschosys Tech", date: "2023 - Present" },
  ];

  const skills = [
    "Web Development",
    "Mobile Application Development",
    "UI/UX Design",
    "Graphic Design",
    "System Maintenance",
    "DevOps Engineer",
    "Cloud Computing",
    "Network Administrator",
    "IT Consultancy",
    "Lecturer",
    "Trainer",
  ];

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

  return (
    <div className="w-full flex flex-col items-center justify-center !py-8 shadow-lg shadow-card/20">
      <Card className="!w-fit !bg-card/50">
        <CardContent className="!px-4 !py-1 flex items-center gap-3">
          <Circle size={16} /> Expert Developer
        </CardContent>
      </Card>
      <div className="flex items-center gap-3 !mt-6 flex-wrap justify-center">
        <h1 className="font-bold text-4xl">Guy Stephane, </h1>
        <h1 className="text-4xl text-gray-500">Your Developer</h1>
      </div>
      <p className="max-w-2xl text-center !mt-4 px-4">
        Brief initial representation of myself, and my previous experiences.
      </p>
      <div className="!mt-6 px-4 w-full flex items-start xl:items-center xsm:flex-col-reverse xl:flex-row justify-center gap-6">
        <Card className="xsm:w-full md:!w-100 !bg-card/50 shadow-lg shadow-card/20 !pb-5">
          <CardContent>
            <div className="w-[90%] bg-card h-85 dark:bg-card/40 shadow flex items-center justify-center !mx-auto !mt-4 rounded-lg relative flex-col">
              <img
                src={GS}
                alt="A picture of me :)"
                className="object-cover h-[350px] w-full absolute brightness-65"
              />
              <div className="flex items-center bg-card/80 !px-3 pr-7! !mt-60 rounded-full shadow z-10">
                <Dot color="limegreen" size={40} />
                <p>Available for work</p>
              </div>
            </div>
            <div className="flex flex-col !mt-4 w-[90%] !mx-auto">
              <h1 className="text-2xl">Hello, I am Guy Stephane</h1>
              <p className="text-sm">
                Full-Stack Web and Mobile Developer, based in Cameroon.
              </p>
              <div className="flex items-center gap-4 !mt-4 border-b !py-4">
                <a href="https://x.com/iamguystephane?s=21" target="__blank">
                  <Button variant="outline" className="!px-3 cursor-pointer">
                    <TwitterIcon />
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/iamguystephane/"
                  target="__blank"
                >
                  <Button variant="outline" className="!px-3 cursor-pointer">
                    <InstagramIcon />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/iamguystephane/"
                  target="__blank"
                >
                  <Button variant="outline" className="!px-3 cursor-pointer">
                    <LinkedinIcon />
                  </Button>
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
              >
                <Button
                  variant="outline"
                  className="!px-3 cursor-pointer rounded-full !mt-6"
                >
                  Connect With Me
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className=" !bg-card/50 shadow-lg shadow-card/20 !pb-5 xsm:w-full! xl:w-1/2! !px-8 !py-5">
          <h1 className="text-2xl font-bold">Bio</h1>
          <p className="text-black dark:text-gray-500 text-sm !pb-9 border-b">
            I am Guy Stephane, a Certified Software Engineer and a dedicated Web
            and Mobile Application Developer, based in the vibrant city of
            Yaounde, Cameroon. I specialize with seamless technical execution to
            crat exceptional digital experiences.
          </p>
          <h1 className="font-bold text-2xl">My Skills</h1>
          <div className="flex items-center gap-2 flex-wrap !pb-9 border-b">
            {skills.map((skill, index) => (
              <Card
                className="w-fit !px-5 !py-2 !bg-card/50 shadow-card/20"
                key={index}
              >
                <CardContent> {skill} </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center mb-6!">
              Experiences
            </h1>
            <div className="space-y-3">
              {experiences.map((xp, index) => (
                <Card key={index} className="!bg-card/50 !shadow-card/50 mb-2!">
                  <CardContent className="flex w-full items-center justify-between !text-start px-5! py-3! flex-wrap">
                    <p className="font-medium min-w-[120px]">{xp.name}</p>
                    <p className="text-gray-500 min-w-[100px] text-center">
                      {xp.location}
                    </p>
                    <p className="text-gray-400 min-w-[120px] text-right">
                      {xp.date}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-start mt-8!">
              <a href={cvFile} download="GUY STEPHANE CV.pdf">
                <Button className="!px-5 rounded-full bg-darkGreen! text-white! hover:!bg-darkGreen/90 shadow-lg shadow-darkGreen/30 cursor-pointer dark:bg-white dark:text-black dark:hover:!bg-[#f9f9f9] dark:hover:!text-black">
                  Download CV <Download className="ml-2" />{" "}
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HomePageAbout;
