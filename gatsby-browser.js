import "./src/scss/main.scss";
import GlobalContextProvider from "./src/context/GlobalContextProvider";
const React = require("react");

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
