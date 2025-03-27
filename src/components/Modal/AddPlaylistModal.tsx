import {
  Modal,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { TbCloudUpload } from "react-icons/tb";

interface IAddPlaylistModal {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddPlaylistModal({
  isOpen,
  onClose,
}: IAddPlaylistModal) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent bg="transparent">
        <div className="flex flex-col items-start justify-start w-full p-2 h-120 bg-dark-900 border-b-primary rounded-2xl">
          <div
            className="flex flex-col items-center justify-center p-4 text-2xl select-none size-50 bg-dark-800 text-dark-700 rounded-xl"
            style={{ border: "2px dashed" }}
          >
            <TbCloudUpload
              strokeWidth="1.5px"
              style={{ width: "6rem", height: "6rem" }}
            />
            import image
            <input type="file" hidden />
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}
