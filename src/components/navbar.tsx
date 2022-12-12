import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { images } from "../constants";
import { useTranslation } from "../i18n/context";
import "../styles/components/navbar.scss";
import LanguageButton from "./languageButton";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{t(item)}</a>
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <LanguageButton />
        <div className="app__navbar-menu" style={{ marginBottom: "4px" }}>
          <HiMenuAlt4
            onClick={() => setToggle(true)}
            style={{ cursor: "pointer" }}
          />
          <div
            style={{
              transform: `${toggle ? "translateX(0%)" : "translateX(100%)"}`,
            }}
          >
            <HiX
              onClick={() => setToggle(false)}
              style={{ cursor: "pointer" }}
            />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    style={{ cursor: "pointer" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
