import React, { FC, useEffect, useRef, useState } from "react";
import { Placeholder, Image } from "./lazy-image.style";

interface LazyImageProps {
  src: string;
  placeholder?: string;
  alt?: string;
  isCardImage?: boolean;
}

const LazyImage: FC<LazyImageProps> = ({ src, ...props }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(
        ([{ intersectionRatio }]) => {
          if (intersectionRatio > 0) setShouldLoad(true);
        },
        { threshold: 1 }
      );
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [placeholderRef, shouldLoad]);

  return shouldLoad ? (
    <Image src={src} {...props} />
  ) : (
    <Placeholder ref={placeholderRef} />
  );
};

export default LazyImage;
