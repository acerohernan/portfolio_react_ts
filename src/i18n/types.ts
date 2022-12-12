import { Language } from "./config/languages";
import translations from "./config/translations.json";

export interface ILanguageContext extends ILanguageState, ILanguageActions {}
export interface ILanguageState {
  isFetching: boolean;
  currentLanguage: Language;
}
export interface ILanguageActions {
  setLanguage: (lang: Language) => Promise<void>;
  t: TranslateFunction;
}

interface ContextData {
  [key: string]: string | number;
}

type TranslationKey =
  | keyof typeof translations
  | (string & Record<never, never>);

export type TranslateFunction = (
  key: TranslationKey,
  data?: ContextData
) => string;
