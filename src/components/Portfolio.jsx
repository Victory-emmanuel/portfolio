import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

import { Link } from "react-router-dom";

const projects = [
  {
    img: project1,
    title: "Dimchi",
    description:
      "A single page site built with react, styled components for design and framer for animations",
    links: {
      site: "https://dimchi.vercel.app",
      github: "https://github.com/Victory-emmanuel/dimchi2",
    },
  },
  {
    img: project2,
    title: "The Brown Patience Company",
    description:
      "A fullstack application built with React and FireBase as the backend, tailwind and css3 as the design choice.",
    links: {
      site: "https://the-brown-patience-company.vercel.app/",
      github: "https://github.com/Victory-emmanuel/the-brown-patience-compsny",
    },
  },
  {
    img: project4,
    title: "React Blog Site",
    description:
      "A dynamic blog site that is built with vite-react , firebase as database and authentication,  tailwind and css3 as the design tech and Tinymce as the cms of choice",
    links: {
      site: "https://my-blog-pi-two.vercel.app/",
      github: "https://github.com/Victory-emmanuel/myBlog",
    },
  },
  {
    img: project5,
    title: "GitHub Profile Finder",
    description:
      "A personal project application built with react to improve my skill on call data from an api ",
    links: {
      site: "https://gh-profile-searcher.vercel.app/",
      github: "https://github.com/Victory-emmanuel/gh-profile-searcher",
    },
  },
  {
    img: project6,
    title: "E-Store",
    description:
      "A personal project appliction built with react to improve my skills in filtering data with different parameters",
    links: {
      site: "https://e-shop-two-beta.vercel.app/",
      github: "https://github.com/Victory-emmanuel/e-shop",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-secondary mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}

      <div className=" flex flex-wrap gap-4  md:w-auto text-center">
        <button className="mx-auto " id="custom-btn">
          <span>
            <Link href="#"></Link>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
