import React from "react";
import { useTranslation } from "react-i18next";

const AboutComponent = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("about.title")}</h1>
      <p>{t("about.secondLine")}</p>
      <p>{t("about.thirdLine")}</p>
      <h4>{t("about.more")}</h4>
      <nav>
        <ul>
          <li>
            <a href="https://vk.com/bessreedart">vk.com</a>
          </li>
          <li>
            <a href="https://www.artstation.com/bessreed">artstation</a>
          </li>
          <li>
            <a href="https://www.deviantart.com/bessreed">devianArt</a>
          </li>
          <li>
            <a href="https://www.furaffinity.net/user/bessreed/">furaffinity</a>
          </li>
          <li>
            <a href="https://boosty.to/bessreed">boosty</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutComponent;
