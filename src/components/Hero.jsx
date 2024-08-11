import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { IoLogoFirebase } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

import { BiLogoTailwindCss } from "react-icons/bi";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resume from "../assets/my-resume.pdf";
const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              "FrontEnd Engineer ",
              1000,
              "WebDesigner",
              1000,
              "Ui / Ux Designer",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-[#A0153E] text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-[#FF204E]">Victory Emmanuel</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate frontend engineer with over 2 years of experience
            freelancing...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer "
            >
              <div className="mt-8 flex flex-wrap  xx:justify-center ss:justify-start ">
                <button className="" id="custom-btn">
                  <span className="w-[180px] h-[55px] mx-[15px]">
                    <a
                      className="text-lg before:content-['Download_CV'] after:content-['Download_CV']	before:w-[180px] after:w-[180px] before:h-[55px] after:h-[55px]"
                      href={resume}
                      download=""
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </span>
                </button>
              </div>
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-[#FF204E] z-20">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Victory-emmanuel?tab=repositories"
              >
                <AiOutlineGithub />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2 }}
                href="www.linkedin.com/in/victory-emmanuel-54a090234"
              >
                <AiOutlineLinkedin />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src="https://i.postimg.cc/V6MTrcNV/Untitled-design-7.png"
          className="w-[300px] md:w-[450px]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-secondary font-semibold  mr-6">My Tech Stack:</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <IoLogoFirebase className="text-orange-500 mx-2" />
        <BiLogoTailwindCss className="text-blue-400" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
