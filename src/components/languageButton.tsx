import { useState } from "react";
import { images } from "../constants";
import { Language, languageList } from "../i18n/config/languages";
import { useTranslation } from "../i18n/context";

const LanguageButton = () => {
  const { setLanguage, currentLanguage } = useTranslation();

  const [open, setOpen] = useState(false);

  function handleSelect(lang: Language) {
    return () => {
      setLanguage(lang);
      setOpen(false);
    };
  }

  return (
    <div className="app__navbar_language_button">
      <button
        onClick={() => setOpen(!open)}
        className="app__navbar_language_button-main_button"
      >
        <img
          src={images[currentLanguage.language as "English"] ?? images.English}
          alt={currentLanguage.language}
        />
      </button>

      <div style={{ transform: open ? "scale(100%)" : "scale(0%)" }}>
        {languageList.map((lang, i) => (
          <button onClick={handleSelect(lang)} key={i} type="button">
            <img src={images[lang.language as "English"] ?? images.English} />
            {lang.language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageButton;
