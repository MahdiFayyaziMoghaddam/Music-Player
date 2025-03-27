import { Fragment, ReactNode } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import Button from "../ui/Button/Button";

interface IMenuItems {
  title: string;
  menuItems: { title: string; route: string; icon: ReactNode }[];
  onClose: () => void;
}

export default function SidebarItems({
  title,
  menuItems,
  onClose,
}: IMenuItems) {
  return (
    <div className="flex flex-col gap-4 text-dark-500">
      <p className="text-lg line-clamp-1">{title}</p>

      {menuItems.map(({ icon, route, title }) => (
        <Fragment key={title}>
          <Button
            className="flex items-center w-full h-12 rounded-md select-none bg-dark-700"
            disableStyles
            onClick={onClose}
          >
            <Link
              className="flex items-center justify-between w-full"
              key={title}
              to={route}
            >
              <div className="flex items-center gap-2">
                <div className="ml-2 flex-center *:size-8 text-primary">
                  {icon}
                </div>
                <p className="text-xl max-2xl:text-lg text-title">{title}</p>
              </div>
              <RiArrowRightSLine
                className="text-primary justify-self-end"
                style={{ width: "2.5rem", height: "2.5rem" }}
              />
            </Link>
          </Button>
        </Fragment>
      ))}
    </div>
  );
}
