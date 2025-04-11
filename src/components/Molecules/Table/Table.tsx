import { ReactNode } from "react";

interface ITableProps {
  children?: ReactNode;
  header: ReactNode;
  className?: string;
}

export default function Table({ children, header, className }: ITableProps) {
  return (
    <table className={`${className}`}>
      <thead>{header}</thead>
      <tbody>{children}</tbody>
    </table>
  );
}
