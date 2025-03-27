import { PlacementWithLogical, Tooltip as Tool } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ITooltip {
  title: string;
  children: ReactNode;
  placement?: PlacementWithLogical;
  delay?: number
  closeOnClick?: boolean
}

const Tooltip = ({ title, children, placement = 'auto',delay,closeOnClick = false }: ITooltip) => {
  return (
    <>
      <Tool
        label={title}
        placement={placement}
        openDelay={delay || 1000}
        closeDelay={100}
        closeOnClick={closeOnClick}
        px={'7px'}
        py={'2px'}
        fontSize={'14px'}
        color={"var(--dark-300-color)"}
        bg={"linear-gradient(0deg, var(--dark-800-color), var(--dark-700-color))"}
        borderBottom={"1px solid var(--primary-color)"}
        borderRadius={'3px'}
        shadow={'0 0 10px var(--dark-900-color)'}
        zIndex={8}
      >
        <div>
        {children}
        </div>
      </Tool>
    </>
  );
}

export default Tooltip