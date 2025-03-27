import { ChangeEvent, HTMLInputTypeAttribute, KeyboardEventHandler, ReactNode } from "react";

interface IInputProps {
  variant?: "primary" | "dark";
  children?: ReactNode;
  className?: string;
  fontSize?: number;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: KeyboardEventHandler<HTMLInputElement>
  value?: string | number;
}

function Input({
  children,
  className = "",
  fontSize = 20,
  type = "text",
  variant = "dark",
  placeholder = "Enter some text ...",
  onChange = () => null,
  onKeyDown = () => null,
  value,
}: IInputProps) {
  const returnVariantClass = () => {
    switch (variant) {
      default: {
        return "bg-gradient-to-t from-dark-900 via-dark-800 to-dark-700 text-dark-400 *:placeholder:text-dark-100";
      }
    }
  };

  // Calculate static classes based on fontSize
  const containerPadding = `py-${Math.floor(fontSize / 5)} px-${Math.floor(
    (fontSize / 5) * 3
  )}`;
  const containerRounded = `rounded-${Math.floor(fontSize / 5)}`;
  const textSize = `text-[${fontSize}px]`;

  return (
    <div
      className={`${returnVariantClass()} ${containerPadding} ${containerRounded} ${textSize} ${className}`}
      style={{
        fontSize: `${fontSize}px`,
        padding: `${fontSize / 5}px ${(fontSize / 5) * 3}px`,
        borderRadius: `${fontSize / 5}px`,
        borderBottom: '1px solid var(--primary-color)',
        boxShadow: '0 0 5px var(--dark-900-color)'
      }}
    >
      {value ? (
        <input
          className="appearance-none outline-none border-none bg-transparent placeholder:text-dark-100"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      ) : (
        <input
          className="appearance-none outline-none border-none bg-transparent placeholder:text-dark-100"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
      {children}
    </div>
  );
}

export default Input;
