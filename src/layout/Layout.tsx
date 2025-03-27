import { memo, ReactNode } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Controls from "../components/Controls/Controls";
import { useDisclosure } from "@chakra-ui/react";

interface ILayout {
  children?: ReactNode;
}

const Layout = memo(({ children }: ILayout) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Navbar onOpen={onOpen} />
      <Sidebar onClose={onClose} isOpen={isOpen} />
      <div className="main">{children}</div>
      <Controls />
    </>
  );
});
export default Layout;
