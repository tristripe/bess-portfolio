import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LightBox from "./lightbox";
import ImageWrapper from "./image-wrapper";
import Illustration1 from "../images/orders/1_Illustration_a.jpg";
import Illustration2 from "../images/orders/1_Illustration_b.jpg";
import Sketch1 from "../images/orders/2_Sketch_a.jpg";
import Sketch2 from "../images/orders/2_Sketch_b.jpg";
import LineIll1 from "../images/orders/3_Lined_Illustration_a.jpg";
import LineIll2 from "../images/orders/3_Lined_Illustration_b.jpg";
import LineSk1 from "../images/orders/4_Lined_Sketch_a.jpg";
import LikeSk2 from "../images/orders/4_Lined_Sketch_b.jpg";
import Ref1 from "../images/orders/5_Reference_a.jpg";
import Ref2 from "../images/orders/5_Reference_b.jpg";
import Char1 from "../images/orders/6_Character_Design_a.jpg";
import Char2 from "../images/orders/6_Character_Design_b.jpg";
import Chibi1 from "../images/orders/7_Chibi_a.jpg";
import Chibi2 from "../images/orders/7_Chibi_b.jpg";
import Hybrid1 from "../images/orders/8_Hybrid_Portrait_a.jpg";
import Hybrid2 from "../images/orders/8_Hybrid_Portrait_b.jpg";
import Custom from "../images/orders/9_Custom_Order.jpg";

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
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Illustration1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Illustration2} />
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
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Sketch1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Sketch2} />
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
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={LineIll1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={LineIll2} />
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
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={LineSk1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={LikeSk2} />
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
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ref1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Ref2} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("characterDesign.title")}</h3>
                <p className="image-item__text">{t("characterDesign.subtitle")}</p>
                <p className="image-item__text">{t("characterDesign.basic")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Char1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Char2} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("chibi.title")}</h3>
                <p className="image-item__text">{t("chibi.subtitle")}</p>
                <p className="image-item__text">{t("chibi.basic")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Chibi1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Chibi2} />
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
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Hybrid1} />
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Hybrid2} />
              </div>
            </article>
            <article className="price-list__item image-item">
              <div className="image-item__text-wrapper">
                <h3 className="image-item__title">{t("customOrder.title")}</h3>
                <p className="image-item__text">{t("customOrder.text")}</p>
              </div>
              <div className="image-item__image-wrapper">
                <ImageWrapper openLightBox={openLightBox} width={"450"} children={Custom} />
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
