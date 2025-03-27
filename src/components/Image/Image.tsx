import { memo, ReactNode, useMemo } from "react";
import { MdMusicNote } from "react-icons/md";

interface IImage {
  className?: string;
  src: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Image = memo(({ className, src, children, onClick }: IImage) => {
  return (
    <>
      {useMemo(
        () => (
          <div
            className={`relative ${
              !src ? "bg-primary text-title" : ""
            } ${className}`}
            onClick={onClick}
          >
            {children}
            {src ? (
              <img className="w-full h-full" src={src} draggable={false} />
            ) : (
              <MdMusicNote />
            )}
          </div>
        ),
        [className, onClick, src, children]
      )}
    </>
  );
});
export default Image;
