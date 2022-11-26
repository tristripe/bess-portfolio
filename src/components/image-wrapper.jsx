import React from "react";

const ImageWrapper = ({ children, openLightBox, width }) => {
  return (
    <div className="default-image" onClick={() => openLightBox(children)}>
      <img src={children} width={width} alt="Изображение" />
    </div>
  );
};

export default ImageWrapper;
