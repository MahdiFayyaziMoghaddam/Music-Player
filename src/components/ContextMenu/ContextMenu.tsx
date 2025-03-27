import { Menu, MenuItem, MenuList, useDisclosure } from "@chakra-ui/react";
import { ForwardedRef, useEffect, useRef } from "react";
import { TbArrowDownToArc } from "react-icons/tb";
import { MouseEventElement } from "../../types/Events";

interface ContextMenuProps {
  event: MouseEventElement;
}

export default function ContextMenu({ event }: ContextMenuProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const contextRef = useRef<HTMLDivElement>(null);
  const inputRef: ForwardedRef<HTMLInputElement> = useRef(null);

  event.preventDefault();

  useEffect(() => {
    onOpen();
    if (contextRef.current) {
      if (
        event.clientY >
        +getComputedStyle(event.target).height.replace("px", "") / 2
      ) {
        contextRef.current.style.top =
          (
            event.clientY -
            +getComputedStyle(contextRef.current).height.replace("px", "")
          ).toString() + "px";
      } else {
        contextRef.current.style.top = event.clientY + "px";
      }

      if (
        event.clientX >
        +getComputedStyle(event.target).width.replace("px", "") / 2
      ) {
        contextRef.current.style.left =
          (
            event.clientX -
            +getComputedStyle(contextRef.current).width.replace("px", "")
          ).toString() + "px";
      } else {
        contextRef.current.style.left = event.clientX + "px";
      }
    }
  }, [event, onOpen]);

  return (
    <>
      <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <MenuList
          bg={"var(--dark-color1)"}
          border={"none"}
          borderY={"1px"}
          py="0.8vh"
          borderRadius="1vh"
          borderColor={"var(--primary-color)"}
          pos={"fixed"}
          ref={contextRef}
        >
          <MenuItem
            w="13vw"
            h="4vh"
            py="0.1vw"
            px="0.5vw"
            bg={"var(--dark-color1)"}
            color={"var(--text-color)"}
            fontSize={"1vw"}
            _hover={{ bg: "var(--dark-color2)" }}
            onClick={() => inputRef.current?.click()}
          >
            <div className="size-[1vw] mr-2">
              <TbArrowDownToArc />
            </div>
            Import Music
          </MenuItem>
        </MenuList>
      </Menu>
      {/* <FileDialog ref={inputRef} /> */}
    </>
  );
}
