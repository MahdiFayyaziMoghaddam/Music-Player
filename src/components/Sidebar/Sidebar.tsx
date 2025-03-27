import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import SidebarItems from "./SidebarItems";
import Logo from "../Logo/Logo";
import { MdLibraryMusic } from "react-icons/md";
import { RiPlayListFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";

interface ISidebar {
  onClose: () => void;
  isOpen: boolean;
}

const Sidebar = ({ isOpen, onClose }: ISidebar) => {

  return (
    <>
      <Drawer
        size={"sm"}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        closeOnEsc={true}
        returnFocusOnClose={false}
      >
        <DrawerOverlay display={isOpen ? "" : "none"} />

        <DrawerContent display={isOpen ? "" : "none"}>
          <div className="flex flex-col w-full h-full flex-nowrap bg-dark-900 border-primary">
            <DrawerCloseButton
              color={"var(--dark-200-color)"}
              w={"3rem"}
              h={"3rem"}
              fontSize={"1.2rem"}
              zIndex={10}
              _hover={{ backgroundColor: "transparent" }}
              onFocus={(e) => e.target.blur()}
            />

            <Logo className="max-lg:scale-[0.75]" />

            <DrawerBody
              p={"1rem 1.8rem"}
              display={"flex"}
              flexFlow={"column nowrap"}
              gap={"3rem"}
              mt={"1rem"}
            >
              <SidebarItems
                title="Pages"
                menuItems={[
                  { icon: <MdLibraryMusic />, title: "Library", route: "/" },
                  {
                    icon: <RiPlayListFill />,
                    title: "Playlists",
                    route: "/playlists",
                  },
                ]}
                onClose={onClose}
              />

              <SidebarItems
                title="Collection"
                menuItems={[
                  {
                    icon: <IoMdHeart />,
                    title: "Favored",
                    route: "/collection",
                  },
                ]}
                onClose={onClose}
              />
            </DrawerBody>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default Sidebar;
