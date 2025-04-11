"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "../../Atoms/Button/Button";
import Avatar from "../../Molecules/Avatar/Avatar";
import Link from "../../Atoms/Link/Link";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import hydration from "@/utils/hydration";
import SearchModal from "../Modal/SearchModal";

function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((prev) => !prev);
  hydration();
  return (
    <>
      <Drawer open={open} onClose={toggleOpen} />
      <div className="flex items-center justify-between px-8 h-14 bg-linear-90 from-dark-700 via-dark-600 to-dark-700 border-b-1 border-b-dark-400 shrink-0">
        <Button variant="primary" className="p-1!" onClick={toggleOpen}>
          <GiHamburgerMenu className="text-2xl" />
        </Button>
        <div className="flex items-center gap-7">
          <div className="flex items-center gap-7">
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact us</Link>
          </div>
          <div className="flex items-center gap-6">
            <SearchModal />
          </div>
          <Avatar />
        </div>
      </div>
    </>
  );
}

export default Navbar;
