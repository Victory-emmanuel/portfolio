import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Dimchi",
    period: "2023 - 2024",
    description:
      "Independently built a responsive landing page for showcasing hair products, leveraging React.js, Styled-components, and Material-UI.",
  },
  {
    company: "The Brown Patience Company",
    period: "2024 - Present",
    description:
      "Utilized TinyMce to streamline blog content management, leading to an increase in publishing efficiency and a more engaging user experience.",
  },
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[600px] mx-auto">
      <h1 className="text-4xl text-secondary font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className=" border border-secondary p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-primary"
            >
              <h2 className="text-secondary  text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-lightPurple">{experience.period}</p>
              <p className="text-white mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
