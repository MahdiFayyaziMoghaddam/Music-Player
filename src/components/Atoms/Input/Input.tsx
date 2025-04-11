"use client";
import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  ReactNode,
} from "react";

interface IInputProps {
  className?: string;
  children?: ReactNode;
}

function Input({
  className = "",
  children,
  ...props
}: IInputProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div
      className={`flex items-center text-dark-200 placeholder:text-dark-300 py-1 px-[10px] bg-linear-0 from-dark-400 to-dark-700 border-dark-400 border-1 rounded-sm text-sm shadow shadow-dark-900/30 ${className}`}
    >
      <input className={`outline-none size-full`} {...props} />
      {children}
    </div>
  );
}

export default Input;
