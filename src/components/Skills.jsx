import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGithubBadge,
} from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiCanva, SiVite } from "react-icons/si";
import { LiaFigma } from "react-icons/lia";
import { SiMui } from "react-icons/si";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },

      {
        name: "Tailwind",
        icon: <BiLogoTailwindCss className="text-blue-400" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "Figma", icon: <LiaFigma className="text-orange-400" /> },
      { name: "Canva", icon: <SiCanva className="text-blue-300" /> },
      { name: "MUi", icon: <SiMui className="text-blue-600" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      {
        name: "Fire Base",
        icon: <IoLogoFirebase className="text-orange-500" />,
      },
      { name: "React", icon: <DiReact className="text-blue-500" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div
      className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-secondary text-center">
          Skills
        </h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them{" "}
          <Link to="/PortfolioPg" className="underline">
            there
          </Link>
          .
        </p>

        <div
          className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
                        "
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-secondary p-6 rounded-lg bg-extraClr shadow-lg  w-full md:w-1/2"
            >
              <h3 className="text-xl  font-bold mb-4 text-center">
                {skill.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-white">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
