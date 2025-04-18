"use client";
import { AlertDialog } from "@base-ui-components/react";
import CloseButton from "../../Atoms/Button/CloseButton";

interface IModalProps {
  open?: boolean;
  onOpen?: (open: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  closeButton?: boolean;
}
export default function Modal({
  children,
  onOpen = () => null,
  open = false,
  className = "",
  closeButton = true,
}: IModalProps) {
  return (
    <AlertDialog.Root open={open} onOpenChange={onOpen}>
      <AlertDialog.Trigger hidden={true}></AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Popup className="fixed top-0 right-0 left-0 bottom-0 flex-center outline-none transition-all duration-150 data-[ending-style]:scale-100 data-[ending-style]:opacity-0 data-[starting-style]:scale-100 data-[starting-style]:opacity-0 overflow-visible">
          <AlertDialog.Close
            className={
              "fixed top-0 bottom-0 right-0 left-0 -z-10 inset-0 bg-black opacity-40 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0"
            }
          ></AlertDialog.Close>
          <div
            className={`relative flex items-start bg-dark-700 border-1 border-dark-400 rounded-sm px-5 py-5 ${
              !children ? "size-50" : ""
            } ${className}`}
          >
            {closeButton ? <CloseButton onClick={() => onOpen(false)} /> : null}
            {children}
          </div>
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
