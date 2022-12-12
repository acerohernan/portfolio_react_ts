import React, { useCallback, useState } from "react";
import { EN, Language, languages } from "./config/languages";
import { fetchLocale } from "./helpers";
import { ILanguageContext, ILanguageState, TranslateFunction } from "./types";

const LanguageContext = React.createContext({} as ILanguageContext);

const initialState: ILanguageState = {
  isFetching: true,
  currentLanguage: EN,
};

const languageMap = new Map<Language["locale"], Record<string, string>>();
languageMap.set(EN.locale, {});

const LS_KEY = "language";

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, setState] = useState<ILanguageState>(initialState);

  const { currentLanguage } = state;

  React.useEffect(() => {
    const locale = localStorage.getItem(LS_KEY);

    if (locale !== EN.locale) setLanguage(languages[locale as string]);
  }, []);

  const setLanguage = React.useCallback(async (language: Language) => {
    if (languageMap.has(language.locale)) {
      localStorage?.setItem(LS_KEY, language.locale);
      setState((prev) => ({
        ...prev,
        isFetching: false,
        currentLanguage: language,
      }));
      return;
    }

    setState((prev) => ({ ...prev, isFetching: true }));

    const locale = await fetchLocale(language.locale);

    if (!locale) {
      setState((prev) => ({ ...prev, isFetching: false }));
      return;
    }

    languageMap.set(language.locale, locale);

    localStorage?.setItem(LS_KEY, language.locale);
    setState((prev) => ({
      ...prev,
      isFetching: false,
      currentLanguage: language,
    }));
  }, []);

  const translate: TranslateFunction = useCallback(
    (key, data) => {
      const translationsSet = languageMap.get(currentLanguage.locale) ?? {};
      const translatedText = translationsSet?.[key] || key;

      return translatedText;
    },
    [currentLanguage]
  );

  return (
    <LanguageContext.Provider value={{ ...state, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => React.useContext(LanguageContext);
