import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions, LocaleTypes } from "@/app/i18n/settings";

// TODO check code and check if I'll need it

// Initialize the i18n instance
const initI18next = async (lang: LocaleTypes, ns: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: typeof ns) =>
          // load the translation file depending on the language and namespace
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lang, ns));

  return i18nInstance;
};

// It will accept the locale and namespace for i18next to know what file to load
export async function createTranslation(lang: LocaleTypes, ns: string) {
  const i18nextInstance = await initI18next(lang, ns);

  return {
    t: i18nextInstance.getFixedT(lang, Array.isArray(ns) ? ns[0] : ns),
  };
}
