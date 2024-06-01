import type { InitOptions } from "i18next";

export const fallbackLng = "en";
export const locales = [fallbackLng, "fr"] as const;
export type LocaleTypes = (typeof locales)[number]; // Means can either be 'en' or 'fr'
export const defaultNS = "common";

export function getOptions(lang = fallbackLng, ns = defaultNS): InitOptions {
  return {
    // debug: true, // Set to true to see console logs
    supportedLngs: locales,
    fallbackLng,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
