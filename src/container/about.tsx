import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../wrapper";
import "../styles/container/about.scss";
import { abouts } from "../utils/data";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>"Hard work</span> beats <span>talent</span> when <br />
        <span>talent</span> doesn’t <span>work hard."</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2
              className="bold-text"
              style={{ marginTop: 30, fontSize: "1.7rem" }}
            >
              {about.title}
            </h2>
            {about.desc.map((desc) => (
              <p
                className="p-text"
                style={{ marginTop: 20, fontSize: "0.9rem" }}
              >
                {desc}
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
