import { Menu as M } from "@base-ui-components/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface IMenuItem {
  onClick?: () => void;
  href?: string;
  title: string;
  icon?: ReactNode;
}

interface IMenuProps {
  children?: ReactNode;
  items?: IMenuItem[];
  className?: string;
}

export default function Menu({ children, items, className = "" }: IMenuProps) {
  return (
    <M.Root>
      <M.Trigger
        className="outline-none"
        onClick={(e) => {
          e.currentTarget.blur();
        }}
        onFocus={(e) => e.target.blur()}
        tabIndex={-1}
        autoFocus={false}
      >
        {children}
      </M.Trigger>
      <M.Portal>
        <M.Positioner className="outline-none">
          <M.Popup
            className={`rounded-sm border-1 border-dark-400 py-1 text-dark-200 outline-none transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 bg-dark-700 max-h-57 overflow-auto shadow-xl w-34 text-md ${className}`}
            onFocus={(e) => e.currentTarget.blur()}
          >
            {items?.map((item) => (
              <M.Item
                key={item.title}
                className="flex items-center gap-[0.35em] cursor-pointer py-2 w-full px-4 text-[1.1em] text-dark-200 leading-4 outline-none select-none hover:bg-dark-400/30 duration-100"
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  }
                  if (item.href) {
                    redirect(item.href);
                  }
                }}
              >
                <div className="text-[1em]">{item.icon || <></>}</div>
                <p className="text-[0.7em]!">{item.title || ""}</p>
              </M.Item>
            ))}
          </M.Popup>
        </M.Positioner>
      </M.Portal>
    </M.Root>
  );
}
