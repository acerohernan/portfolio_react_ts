import { motion } from "framer-motion";
import { useTranslation } from "../i18n/context";
import "../styles/container/skills.scss";
import { experiences, skills } from "../utils/data";
import { AppWrap, MotionWrap } from "../wrapper";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="head-text">{t("Skills & Experiences")}</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
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
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year + index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text" style={{ marginBottom: "5px" }}>
                  {experience.year}
                </p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.name}
                    key={work.name + index}
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
                      <p className="p-text" key={desc + index}>
                        - {t(desc)}
                      </p>
                    ))}
                  </motion.div>
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
