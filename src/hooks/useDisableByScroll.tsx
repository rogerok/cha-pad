import { useEffect } from "react";

const useDisableByScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  });
};

export default useDisableByScroll;
