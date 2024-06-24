import Image from "next/image";
import type { Image as ImageType } from "velite";
import { cn } from "~/lib/utils";

type PictureProps = {
  image: ImageType;
  quality?: number;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

export default function Picture({
  image,
  quality,
  width,
  height,
  alt,
  className,
}: PictureProps) {
  return (
    <>
      <Image
        src={image.src}
        alt={alt}
        width={width ?? image.width}
        height={height ?? image.height}
        className={cn(className)}
        priority
        blurDataURL={image.blurDataURL}
        placeholder="blur"
        quality={quality ?? 100}
      />
    </>
  );
}
