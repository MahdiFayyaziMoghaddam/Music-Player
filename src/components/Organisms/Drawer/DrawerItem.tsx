"use client";

import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../../Atoms/Button/Button";
import { ReactNode } from "react";

interface IDrawerItemProps {
  icon: ReactNode;
  title: string;
  href: string;
}

export default function DrawerItem({ href, icon, title }: IDrawerItemProps) {
  return (
    <Button
      variant="dark"
      className="flex justify-between items-center py-1.5 px-2.5! text-xl"
      href={href}
    >
      <div className="flex items-center gap-1.5 text-[1.2rem] text-primary">
        {icon}
        <p className="text-sm text-dark-200">{title}</p>
      </div>
      <FaArrowRightLong className="text-[1rem] text-primary" />
    </Button>
  );
}
