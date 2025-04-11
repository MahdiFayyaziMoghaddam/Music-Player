import L from "next/link";
import { ReactNode } from "react";

interface ILinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function Link({ href, children, className = "" }: ILinkProps) {
  return (
    <L
      href={href}
      onClick={(e) => {
        e.currentTarget.blur();
      }}
      className={`text-[0.85rem] text-dark-200 hover: hover:underline underline-offset-[10%] transition-colors duration-200 active:text-primary ${className}`}
    >
      {children}
    </L>
  );
}
