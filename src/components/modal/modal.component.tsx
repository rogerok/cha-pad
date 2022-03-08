import React, { FC, useRef } from "react";

interface IModal {
  selectedImage: string;
  setSelectedImage: Function;
}

const Modal: FC<IModal> = ({ selectedImage, setSelectedImage }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setSelectedImage(null);
    }
  };

  return (
    <div ref={modalRef} onClick={handleClick}>
      <img src={selectedImage} alt="" />
    </div>
  );
};

export default Modal;
