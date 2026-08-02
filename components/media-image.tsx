"use client";

import { useState } from "react";

type MediaImageProps = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
};

export function MediaImage({
  src,
  fallbackSrc = "/media/screenshot-placeholder.svg",
  alt,
  className,
  width = 1600,
  height = 1000,
}: MediaImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
