import React, { useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

const LightBox = ({ src, closeModal, handler }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => closeModal());

  return (
    <div className="lightbox">
      <div className="lightbox__wrapper">
        <div className="lightbox__image-wrapper" ref={ref}>
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
