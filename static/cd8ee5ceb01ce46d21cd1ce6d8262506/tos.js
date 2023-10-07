import React from "react";
import Sidebar from "../components/sidebar";
import TosComponent from "../components/tos-component";

const Tos = () => {
  return (
    <>
      <Sidebar />
      <TosComponent />
    </>
  );
};

export default Tos;

export const Head = () => <title>Правила работы</title>;
