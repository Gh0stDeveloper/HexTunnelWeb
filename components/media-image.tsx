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
  return (
    <object
      data={src}
      type="image/webp"
      className={["media-image", className].filter(Boolean).join(" ")}
      aria-label={alt}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </object>
  );
}
