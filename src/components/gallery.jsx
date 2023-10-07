import React, { useContext, useState } from "react";
import { folders, GlobalStateContext } from "../context/GlobalContextProvider";
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

  console.log(state);

  const renderItem = (node, idx) => {
    return (
      <div className="item" key={idx} onClick={() => openLightBox(node.childImageSharp.fluid.src)}>
        <img src={node.childImageSharp.fluid.src} alt={node.base} key={idx} />
      </div>
    );
  };
  const renderGallery = (state) => {
    switch (state) {
      case folders.ILLUSTRATIONS:
        return data.illustrations.edges.map(({ node, idx }) => renderItem(node, idx));
      case folders.SKETCHES:
        return data.sketches.edges.map(({ node, idx }) => renderItem(node, idx));
      case folders.CREATURES:
        return data.creatures.edges.map(({ node, idx }) => renderItem(node, idx));
      case folders.MIXED:
        return data.mixed.edges.map(({ node, idx }) => renderItem(node, idx));
      case folders.INKTOBER:
        return data.inktober.edges.map(({ node, idx }) => renderItem(node, idx));
      case folders.CARDS:
        return data.cards.edges.map(({ node, idx }) => renderItem(node, idx));
      default:
        return <></>;
    }
  };

  return (
    <>
      <div className="masonry" onKeyDown={() => keyDownHandler}>
        {renderGallery(state.folder)}
      </div>
      {toggler && <LightBox src={imageSrc} closeModal={closeLightBox} />}
    </>
  );
};

export default Gallery;
