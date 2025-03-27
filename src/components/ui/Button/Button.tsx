import { ReactNode } from "react";

interface IButtonProps {
  variant?: "primary" | "dark" | "default";
  children?: ReactNode;
  className?: string;
  fontSize?: number;
  onClick?: () => void;
  disabled?: boolean;
  disableStyles?: boolean;
}

const Button = ({
  children,
  className = "",
  variant = "dark",
  onClick = () => null,
  fontSize = 20,
  disabled = false,
}: IButtonProps) => {
  const returnVariantClass = (): string => {
    switch (variant) {
      case "primary":
        return "bg-gradient-to-b from-primary to-secondary text-dark-300";
      case "dark":
        return "bg-gradient-to-t from-dark-900 via-dark-800 to-dark-700 text-dark-400";
      case "default":
        return "";
    }
  };

  const styleObj = {
    fontSize: `${fontSize}px`,
    padding: `${fontSize / 5}px ${(fontSize / 5) * 3}px`,
    borderRadius: `${fontSize / 5}px`,
    boxShadow: "0 0 2px var(--dark-900-color)",
    borderBottom: "1px solid var(--primary-color)",
  };

  if (/ p-| px-| py-| pt-| pl-| pb-| pr-/.test(className))
    styleObj.padding = "";
  
  if (/ rounded-/.test(className))
    styleObj.borderRadius = "";

  return (
    <div
      className={`
        ${returnVariantClass()}
        flex-center
        font-medium
        select-none
        transition-all
        duration-200
        cursor-pointer active:opacity-50
        ${variant !== "default" && "hover:opacity-75"}
        ${disabled && "opacity-50 cursor-not-allowed"}
        ${className}
      `}
      onClick={!disabled ? onClick : undefined}
      style={variant !== "default" ? styleObj : {}}
    >
      {children}
    </div>
  );
};

export default Button;
