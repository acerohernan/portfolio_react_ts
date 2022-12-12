import { motion } from "framer-motion";
import { useTranslation } from "../i18n/context";
import "../styles/container/about.scss";
import { abouts } from "../utils/data";
import { AppWrap, MotionWrap } from "../wrapper";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="head-text" style={{ maxWidth: "750px" }}>
        "{t("Hard Work Beats Talent When Talent Doesn't Work Hard.")}"
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2
              className="bold-text"
              style={{ marginTop: 30, fontSize: "1.7rem" }}
            >
              {t(about.title)}
            </h2>
            {about.desc.map((desc, i) => (
              <p
                className="p-text"
                style={{ marginTop: 20, fontSize: "0.9rem" }}
                key={i}
              >
                {t(desc)}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
