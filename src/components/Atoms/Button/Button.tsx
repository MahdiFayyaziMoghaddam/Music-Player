"use client";
import { useRouter } from "next/navigation";
import { memo, useMemo, useCallback, HTMLAttributes, ReactNode } from "react";

interface IButtonProps {
  variant: "primary" | "dark" | "icon";
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}

const Button = memo(function Button({
  children,
  className = "",
  variant,
  onClick = () => null,
  disabled = false,
  href,
  ...props
}: IButtonProps & HTMLAttributes<HTMLDivElement>) {
  const router = useRouter();

  const variantClass = useMemo(() => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-b from-primary via-secondary to-secondary text-dark-100 py-1 px-4 rounded-sm border-1 border-primary hover:opacity-75";
      case "dark":
        return "bg-gradient-to-t from-dark-700 via-dark-700 to-dark-500 text-dark-200 py-1 px-4 rounded-sm border-dark-400 border-1 hover:opacity-75";
      case "icon":
        return "rounded-full p-[0.35em] hover:bg-dark-400/50 text-dark-200";
    }
  }, [variant]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.blur();
    if (!disabled) {
      onClick();
      if (href) {
        router.push(href);
      }
    }
  };

  return (
    <div
      className={`
        ${variantClass}
        text-sm
        flex-center
        font-medium
        select-none
        transition-all
        duration-100
        cursor-pointer 
        outline-none
        active:opacity-55
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
});

export default Button;
