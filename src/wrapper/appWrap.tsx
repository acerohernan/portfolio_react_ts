import { FC } from "react";
import { NavigationDots, SocialMedia } from "../components";
import { useTranslation } from "../i18n/context";

const AppWrap = (Component: FC, idName: string, classNames?: string) =>
  function HOC() {
    const { t } = useTranslation();

    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2022 HERNAN</p>
            <p className="p-text">{t("All rights reserved")}</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
