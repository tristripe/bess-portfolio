import React, { useContext, useState } from "react";
import { Link } from "gatsby";
import { GlobalDispatchContext, GlobalStateContext } from "../context/GlobalContextProvider";
import useMedia from "../hooks/useMedia";
import iconMenu from "../images/icon-menu.svg";
import iconClose from "../images/icon-close.svg";

const Sidebar = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { isDesktop } = useMedia();
  const [isHidden, setIsHidden] = useState(false);

  const toggleIsLoading = () => {
    setIsHidden((current) => !current);
  };

  return (
    <section className="sidebar">
      <div className="sidebar__wrapper">
        <div className="sidebar__header">
          <Link to="/" className="sidebar__logo">
            BESSREED
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
              <Link to="#" className="sidebar__link">
                Условия работы
              </Link>
              <Link to="#" className="sidebar__link">
                Прайс-лист
              </Link>
              <Link to="/about" className="sidebar__link">
                Обо мне
              </Link>
              <p className="copyright">Закопирайчено Мибипом</p>
            </nav>
          </>
        )}
      </div>
    </section>
  );
};

export default Sidebar;
