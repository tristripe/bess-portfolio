import React from "react";
import { useTranslation } from "react-i18next";

const TosComponent = () => {
  const { t } = useTranslation();

  return (
    <section className="tos">
      <div className="tos__wrapper">
        <h1 className="title">{t("sidebar.tos")}</h1>
        <div className="tos__text-wrapper">
          <p>{t("tos.pretitle")}</p>
          <hr />
          <h3 className="subtitle">{t("tos.general.title")}</h3>
          <p>{t("tos.general.text")}</p>
          <hr />
          <h3 className="subtitle">{t("tos.payment.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("tos.payment.text") }} />
          <p>{t("tos.payment.specialText")}</p>
          <hr />
          <h3 className="subtitle">{t("tos.process.title")}</h3>
          <p>{t("tos.process.deadline")}</p>
          <p>{t("tos.process.wip")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("tos.process.queue") }} />
          <hr />
          <h3 className="subtitle">{t("tos.themes.title")}</h3>
          <p>{t("tos.themes.allowed")}</p>
          <p>{t("tos.themes.notAllowed")}</p>
          <hr />
          <h3 className="subtitle">{t("tos.satisfaction.title")}</h3>
          <p>{t("tos.satisfaction.first")}</p>
          <p>{t("tos.satisfaction.second")}</p>
          <p>{t("tos.satisfaction.third")}</p>
          <p>{t("tos.satisfaction.fourth")}</p>
          <hr />
          <h3 className="subtitle">{t("tos.copyright.title")}</h3>
          <p>{t("tos.copyright.prelist")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("tos.copyright.firstList") }} />
          <p>{t("tos.copyright.preListTwo")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("tos.copyright.secondList") }} />
          <p>{t("tos.copyright.afterListTwo")}</p>
          <p>{t("tos.copyright.preListThree")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("tos.copyright.thirdList") }} />
          <p>{t("tos.copyright.preListFour")}</p>
          <p dangerouslySetInnerHTML={{ __html: t("tos.copyright.fourthList") }} />
          <h3 className="subtitle">{t("tos.refund.title")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("tos.refund.text") }} />
        </div>
      </div>
    </section>
  );
};

export default TosComponent;
