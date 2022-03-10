import { motion } from "framer-motion";
import { AppWrap } from "../wrapper";
import headerImg from "../assets/header.png";
import "../styles/container/header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Hernan</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">React Developer</p>
          <p className="p-text">Frontend Developer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      <img src={headerImg} alt="Circles" className="app__header-img" />
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
