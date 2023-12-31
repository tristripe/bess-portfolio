import i18next from "i18next";

i18next.init({
  lng: typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "ru" : "ru",
  fallbackLng: typeof window !== "undefined" ? localStorage.getItem("i18nextLng") || "ru" : "ru",
  resources: {
    ru: {
      translations: require("../locales/ru/translations.json"),
    },
    en: {
      translations: require("../locales/en/translations.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
  returnObjects: true,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  react: {
    wait: true,
  },
});

i18next.languages = ["ru", "en"];

export default i18next;
