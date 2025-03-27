import { MenuItem as MI } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IMenuItem {
  children?: ReactNode
  onClick?: () => void
}

export default function MenuItem({children,onClick}: IMenuItem) {
  return (
        <MI
        height="20px"
        bg="transparent"
        py={3}
        px={4}
        color="var(--dark-300-color)"
        fontSize="16px"
        _hover={{ 
          bg: "var(--dark-800-color)",
        }}
        onClick={onClick}
          >
            {children}
        </MI>
  )
}
