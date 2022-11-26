import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Ducks from "../images/2022/Duck-Dreams.jpg";
import LightBox from "./lightbox";
import ImageWrapper from "./image-wrapper";

const PriceListContent = () => {
  const { t } = useTranslation();
  const [toggler, setToggler] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const closeLightBox = () => {
    setToggler(false);
    document.removeEventListener("keydown", keyDownHandler);
    document.querySelector(".main-wrapper").classList.remove("disable");
  };

  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      closeLightBox();
    }
  };

  const openLightBox = (src) => {
    setImageSrc(src);
    setToggler(true);
    document.querySelector(".main-wrapper").classList.add("disable");
    document.addEventListener("keydown", keyDownHandler);
  };

  return (
    <>
      <section className="price-list">
        <div className="price-list__wrapper">
          <h1 className="title price-list__title">{t("sidebar.priceList")}</h1>
          <div className="price-list__list">
            <div className="price-list__preview">
              <p className="price-list__background">{t("backgrounds.simple")}</p>
              <p className="price-list__background">{t("backgrounds.difficult")}</p>
              <p className="price-list__background">{t("backgrounds.extra")}</p>
              <p className="price-list__background">{t("backgrounds.allPrices")}</p>
            </div>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("illustration.title")}</h3>
                <p className="image-item__text">{t("illustration.subtitle")}</p>
                <p className="image-item__text">{t("illustration.portrait")}</p>
                <p className="image-item__text">{t("illustration.halfBody")}</p>
                <p className="image-item__text">{t("illustration.fullBody")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("sketch.title")}</h3>
                <p className="image-item__text">{t("sketch.subtitle")}</p>
                <p className="image-item__text">{t("sketch.portrait")}</p>
                <p className="image-item__text">{t("sketch.halfBody")}</p>
                <p className="image-item__text">{t("sketch.fullBody")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("linedIllustration.title")}</h3>
                <p className="image-item__text">{t("linedIllustration.subtitle")}</p>
                <p className="image-item__text">{t("linedIllustration.portrait")}</p>
                <p className="image-item__text">{t("linedIllustration.halfBody")}</p>
                <p className="image-item__text">{t("linedIllustration.fullBody")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("linedSketch.title")}</h3>
                <p className="image-item__text">{t("linedSketch.subtitle")}</p>
                <p className="image-item__text">{t("linedSketch.portrait")}</p>
                <p className="image-item__text">{t("linedSketch.halfBody")}</p>
                <p className="image-item__text">{t("linedSketch.fullBody")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("referenceSheet.title")}</h3>
                <p className="image-item__text">{t("referenceSheet.subtitle")}</p>
                <p className="image-item__text">{t("referenceSheet.basic")}</p>
                <p className="image-item__text">{t("referenceSheet.body")}</p>
                <p className="image-item__text">{t("referenceSheet.head")}</p>
                <p className="image-item__text">{t("referenceSheet.detail")}</p>
                <p className="image-item__text">{t("referenceSheet.clothes")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("characterDesign.title")}</h3>
                <p className="image-item__text">{t("characterDesign.subtitle")}</p>
                <p className="image-item__text">{t("characterDesign.basic")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("hybridPortrait.title")}</h3>
                <p className="image-item__text">{t("hybridPortrait.subtitle")}</p>
                <p className="image-item__text">{t("hybridPortrait.basic")}</p>
                <p className="image-item__text">{t("hybridPortrait.addColor")}</p>
                <p className="image-item__text">{t("hybridPortrait.oneHead")}</p>
                <p className="image-item__text">{t("hybridPortrait.notAvailable")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("customOrder.title")}</h3>
                <p className="image-item__text">{t("customOrder.text")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ducks} />
              </div>
            </article>
          </div>
        </div>
      </section>
      {toggler && <LightBox src={imageSrc} closeModal={closeLightBox} />}
    </>
  );
};

export default PriceListContent;
