import React, { FC, useEffect, useRef, useState } from "react";
import { Placeholder, Image } from "./lazy-image.style";

interface LazyImageProps {
  src: string;
  placeholder: string;
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
        { threshold: 0.1 }
      );
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [placeholderRef, shouldLoad]);

  return shouldLoad ? (
    <Image src={src} alt="tea" />
  ) : (
    <Placeholder ref={placeholderRef} />
  );
};

export default LazyImage;
