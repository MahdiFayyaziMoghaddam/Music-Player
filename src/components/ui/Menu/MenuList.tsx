import {
  MenuList as ChakraMenuList,
  Menu,
  MenuButton,
  MenuListProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMenuListProps extends MenuListProps {
  button?: ReactNode;
  children: ReactNode;
  className?: string;
}

function MenuList({ children, className, button, ...props }: IMenuListProps) {
  return (
    <Menu>
      <MenuButton>{button}</MenuButton>
      <ChakraMenuList
        bg="var(--dark-900-color)"
        border="none"
        borderY="1px"
        borderColor="var(--primary-color)"
        minW="165px"
        py={1}
        m={0}
        borderRadius="3px"
        shadow="2xl"
        spacing={2}
        _hover={{
          borderColor: "var(--primary-color)",
        }}
        className={className}
        {...props}
      >
        {children}
      </ChakraMenuList>
    </Menu>
  );
}

MenuList.displayName = "MenuList";

export default MenuList;
