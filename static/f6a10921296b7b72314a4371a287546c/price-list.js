import React from "react";
import Sidebar from "../components/sidebar";
import PriceListContent from "../components/price-list-content";

const PriceList = () => {
  return (
    <>
      <Sidebar />
      <PriceListContent />
    </>
  );
};

export default PriceList;

export const Head = () => <title>Прайс-лист</title>;
