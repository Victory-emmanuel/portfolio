import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "First Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Second Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Third Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
  },
  {
    company: "Fourth Company",
    period: "2020 - Present",
    description: "Description of your experience in this company.",
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
                    hover:shadow-xl transition-shadow duration-300 bg-extraClr"
            >
              <h2 className="text-secondary  text-2xl font-semibold">
                {experience.company}
              </h2>
              <p className="text-white">{experience.period}</p>
              <p className="text-gray-400 mt-4">{experience.description}</p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
