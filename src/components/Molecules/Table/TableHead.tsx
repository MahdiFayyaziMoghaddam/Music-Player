import { ReactNode } from "react";

interface ITableHeadProps {
  children?: ReactNode;
  className?: string;
}

export default function TableHead({ children, className }: ITableHeadProps) {
  return (
    <tr
      className={`*:border-1 *:border-dark-400 *:border-b-0 px-5 py-0.5 text-dark-300 select-none ${className}`}
    >
      {children}
    </tr>
  );
}
