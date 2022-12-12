export interface Language {
  code: string;
  language: string;
  locale: string;
}

export const ES: Language = {
  code: "es",
  language: "Español",
  locale: "es-ES",
};

export const EN: Language = {
  code: "en",
  language: "English",
  locale: "en-US",
};

export const languages: Record<string, Language> = {
  "en-US": EN,
  "es-ES": ES,
};

export const languageList = Object.values(languages);
