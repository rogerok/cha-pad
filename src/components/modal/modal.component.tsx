import React, { FC, useRef } from "react";

import useDisableByScroll from "../../hooks/useDisableByScroll";

import { ModalLayout, TeaPhoto, CloseModalButton } from "./modal.styles";

interface IModalProps {
  selectedImage: string;
  setSelectedImage: Function;
}

const Modal: FC<IModalProps> = ({ selectedImage, setSelectedImage }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const isOpen: boolean = selectedImage ? true : false;
  useDisableByScroll(isOpen);

  const handleOuterClose = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      setSelectedImage(null);
    }
  };

  return (
    <ModalLayout ref={modalRef} onClick={handleOuterClose}>
      <CloseModalButton onClick={() => setSelectedImage(null)} />
      <TeaPhoto src={selectedImage} alt="" />
    </ModalLayout>
  );
};

export default Modal;
