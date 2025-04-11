import { ImgHTMLAttributes } from "react";
import { MdMusicNote } from "react-icons/md";

interface ImageProps {
  src: string;
  className?: string;
  alt?: string;
}

export default function Image({
  src = "",
  alt,
  className,
  ...props
}: ImageProps & ImgHTMLAttributes<HTMLImageElement>) {
  return src ? (
    <img
      src={src}
      alt={alt}
      className={`object-contain bg-dark-900 select-none text-[0.6rem] ${className}`}
      draggable={false}
      {...props}
    />
  ) : (
    <div
      className={` bg-linear-135 from-dark-900 via-dark-500 to-dark-900 select-none p-[2%] *:text-primary/85 ${className}`}
    >
      <MdMusicNote className="size-full" />
    </div>
  );
}
