import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import "../styles/container/skills.scss";
import { skills, experiences } from "../utils/data";

import figma from "../assets/figma.png";

const Skills = () => {
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div className="app__flex" style={{ backgroundColor: "#eee" }}>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text" style={{ fontSize: "1.3rem" }}>
                        {work.name}
                      </h4>
                      <p
                        className="p-text"
                        style={{
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          marginBottom: 10,
                        }}
                      >
                        {work.company}
                      </p>
                      {work.desc.map((desc, index) => (
                        <p className="p-text" key={index}>
                          - {desc}
                        </p>
                      ))}
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__whitebg"
);
