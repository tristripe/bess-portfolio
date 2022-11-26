import React, { useContext, useState } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import LightBox from "./lightbox";

const Gallery = ({ data }) => {
  const state = useContext(GlobalStateContext);
  const [toggler, setToggler] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const openLightBox = (src) => {
    setImageSrc(src);
    setToggler(true);
    document.addEventListener("keydown", keyDownHandler);
  };

  const closeLightBox = () => {
    setToggler(false);
    document.removeEventListener("keydown", keyDownHandler);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Escape") {
      closeLightBox();
    }
  };

  return (
    <>
      <div className="masonry" onKeyDown={() => keyDownHandler}>
        {state.year === "currYear"
          ? data.currYear.edges.map(({ node, idx }) => (
              <div className="item" key={idx} onClick={() => openLightBox(node.childImageSharp.fluid.src)}>
                <img src={node.childImageSharp.fluid.src} alt={node.base} key={idx} />
              </div>
            ))
          : data.prevYear.edges.map(({ node, idx }) => (
              <div className="item" key={idx} onClick={() => openLightBox(node.childImageSharp.fluid.src)}>
                <img src={node.childImageSharp.fluid.src} alt={node.base} key={idx} />
              </div>
            ))}
      </div>
      {toggler && <LightBox src={imageSrc} closeModal={closeLightBox} />}
    </>
  );
};

export default Gallery;
