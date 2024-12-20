import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";
import resume from "../assets/my-resume.pdf";

import { Link } from "react-router-dom";

const projects = [
  {
    img: "https://i.postimg.cc/VstYW1yR/1.jpg",
    title: "Dimchi",
    description:
      "A single page site built with react, styled components for design and framer for animations",
    links: {
      site: "https://dimchi.vercel.app",
      github: "https://github.com/Victory-emmanuel/dimchi2",
    },
  },
  {
    img: "https://i.postimg.cc/SsBmb19C/2.jpg",
    title: "The Brown Patience Company",
    description:
      "A fullstack application built with React and FireBase as the backend, tailwind and css3 as the design choice.",
    links: {
      site: "https://the-brown-patience-company.vercel.app/",
      github: "https://github.com/Victory-emmanuel/the-brown-patience-compsny",
    },
  },
  {
    img: "https://i.postimg.cc/Ss2m5bnm/3.jpg",
    title: "React Blog Site",
    description:
      "A dynamic blog site that is built with vite-react , firebase as database and authentication,  tailwind and css3 as the design tech and Tinymce as the cms of choice",
    links: {
      site: "https://my-blog-pi-two.vercel.app/",
      github: "https://github.com/Victory-emmanuel/myBlog",
    },
  },
  {
    img: "https://i.postimg.cc/yYz7f5sz/5.jpg",
    title: "GitHub Profile Finder",
    description:
      "A personal project application built with react to improve my skill on call data from an api ",
    links: {
      site: "https://gh-profile-searcher.vercel.app/",
      github: "https://github.com/Victory-emmanuel/gh-profile-searcher",
    },
  },
  {
    img: "https://i.postimg.cc/yx0s1hh5/4.jpg",
    title: "E-Store",
    description:
      "A personal project application built with react to improve my skills in filtering data with different parameters",
    links: {
      site: "https://e-shop-two-beta.vercel.app/",
      github: "https://github.com/Victory-emmanuel/e-shop",
    },
  },
  {
    img: "https://i.postimg.cc/LsV561TV/3.png",
    title: "Online-Shop",
    description:
      "A personal project to improve my ui and animation skills .",
    links: {
      site: "https://shop-whatever.vercel.app/",
      github: "https://github.com/Victory-emmanuel/online-shop",
    },
  },
  {
    img: "https://i.postimg.cc/tgb7j5hT/2.png",
    title: "Porfolio Website",
    description:
      "A personal portfolio template project website built with vite-react, material-tailwind and framer",
    links: {
      site: "https://portfolio-demo-2.vercel.app/",
      github: "https://github.com/Victory-emmanuel/portfolio-2",
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
                  className="px-4 py-2 bg-primary text-gray-200 rounded-lg hover:bg-extraClr
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-3 bg-extraClr text-gray-200 rounded-lg hover:bg-extraClr transition duration-300"
                >
                  <AiOutlineGithub className="my-auto" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}

      <div className="mt-8 flex flex-wrap  xx:justify-center ss:justify-start ">
        <button className="" id="custom-btn">
          <span className="w-[180px] h-[55px] mx-[15px]">
            <a
              className="text-lg before:content-['View_More'] after:content-['View_More']	before:w-[180px] after:w-[180px] before:h-[55px] after:h-[55px]"
              href="https://linktr.ee/victory125"
            ></a>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
