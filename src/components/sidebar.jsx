import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";
import useMedia from "../hooks/useMedia";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";
import { useTranslation } from "react-i18next";
import LanguageMenu from "./language-menu";

const Sidebar = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { isDesktop } = useMedia();
  const [isHidden, setIsHidden] = useState(false);
  const { t } = useTranslation();

  const toggleIsLoading = () => {
    setIsHidden((current) => !current);
  };

  return (
    <section className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__header">
          <Link to="/" className="sidebar__logo">
            BESS REED
          </Link>
          {!isDesktop && (
            <button className="sidebar__menu-toggle" onClick={toggleIsLoading}>
              <img src={isHidden ? iconClose : iconMenu} alt="Toggle" />
            </button>
          )}
        </div>

        {(isDesktop || isHidden) && (
          <>
            <nav className="sidebar__navigation">
              <Link
                to="/"
                onClick={() => dispatch({ type: "CHANGE_YEAR", payload: "currYear" })}
                className="sidebar__link"
                activeClassName="sidebar__link--active"
              >
                2022 год
              </Link>
              <Link
                to="/"
                onClick={() => dispatch({ type: "CHANGE_YEAR", payload: "prevYear" })}
                className="sidebar__link"
              >
                2021 год
              </Link>
              <Link to="/tos" className="sidebar__link">
                {t("sidebar.tos")}
              </Link>
              <Link to="/price-list" className="sidebar__link">
                {t("sidebar.priceList")}
              </Link>
              <Link to="/about" className="sidebar__link">
                {t("sidebar.about")}
              </Link>
              <p className="copyright">{t("sidebar.copyright")}</p>

              <LanguageMenu />
            </nav>
          </>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
