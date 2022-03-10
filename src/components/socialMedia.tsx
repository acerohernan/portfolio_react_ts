import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/acerohernan" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/hernan-acero/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
