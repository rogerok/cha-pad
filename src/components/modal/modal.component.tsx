import React, { FC, useRef } from "react";
import { ModalLayout, TeaPhoto, CloseModalButton } from "./modal.styles";

interface IModalProps {
  selectedImage: string;
  setSelectedImage: Function;
}

const Modal: FC<IModalProps> = ({ selectedImage, setSelectedImage }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setSelectedImage(null);
    }
  };

  return (
    <ModalLayout ref={modalRef} onClick={handleClick}>
      <TeaPhoto src={selectedImage} alt="" />
      <CloseModalButton onClick={() => setSelectedImage(null)} />
    </ModalLayout>
  );
};

export default Modal;
