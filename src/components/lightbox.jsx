import React from "react";

const LightBox = ({ src, closeModal }) => {
  return (
    <div className="lightbox">
      <div className="lightbox__wrapper">
        <div className="lightbox__image-wrapper">
          <button onClick={closeModal} className="lightbox__close">
            &times;
          </button>
          <img src={src} alt="Изображение" />
        </div>
      </div>
    </div>
  );
};

export default LightBox;
