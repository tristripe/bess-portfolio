import React from "react";
import { useTranslation } from "react-i18next";

const LanguageMenu = () => {
  const { t, i18n } = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  }

  return (
    <article className="change-lang">
      <button
        className={i18n.language === "ru" ? `change-lang__button change-lang__button--active` : `change-lang__button`}
        onClick={() => changeLang("ru")}
      >
        ru
      </button>
      <button
        className={i18n.language === "en" ? `change-lang__button change-lang__button--active` : `change-lang__button`}
        onClick={() => changeLang("en")}
      >
        en
      </button>
    </article>
  );
};

export default LanguageMenu;
