import React from "react";
import { withTrans } from "../../i18n/withTrans";

const Layout = ({ children }) => {
  return (
    <main className="content-wrapper">
      <section className="main-wrapper">{children}</section>
    </main>
  );
};

export default withTrans(Layout);
