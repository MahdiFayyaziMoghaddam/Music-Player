import { IoMenu, IoSearch } from "react-icons/io5";
import Tooltip from "../ui/Tooltip/Tooltip";
import { memo, useState } from "react";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import Link from "../ui/Link/Link";

interface INavbar {
  onOpen: () => void;
}

const Navbar = memo(({ onOpen }: INavbar) => {
  const [value, setValue] = useState<string>("");

  const searching = () => {};

  return (
    <div
      className="flex items-center justify-between w-full h-[var(--navbar-height)] px-10 flex-nowrap bg-dark-800 shrink-0"
      style={{ boxShadow: "10px 10px 18px red" }}
    >
      <Tooltip
        title="sidebar"
        placement="bottom"
        children={
          <Button
            variant="dark"
            className="flex items-center rounded-sm"
            fontSize={10}
            onClick={onOpen}
          >
            <IoMenu className="text-dark-100 size-11" />
          </Button>
        }
      />

      <div className="flex items-center gap-12">
        <div className="flex gap-10">
          <Link href="/about">Link</Link>
          <Link href="/about">Link</Link>
          <Link href="/about">Link</Link>
        </div>
        <div className="flex items-center gap-10">
          <Input
            variant="dark"
            placeholder="Search a music name ..."
            className="flex items-center gap-4"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && searching()}
          >
            <IoSearch
              className="cursor-pointer text-primary size-7"
              onClick={searching}
            />
          </Input>
        </div>
      </div>
    </div>
  );
});

export default Navbar;
