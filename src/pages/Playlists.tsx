import Tooltip from "../components/ui/Tooltip/Tooltip";
import Button from "../components/ui/Button/Button";
import AddPlaylistModal from "../components/Modal/AddPlaylistModal";
import { useDisclosure } from "@chakra-ui/react";

export default function Playlists() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <AddPlaylistModal isOpen={isOpen} onClose={onClose} />
      <div className="absolute right-5 bottom-5">
        <Tooltip title="add playlist" placement="left">
          <Button
            variant="primary"
            className="rounded-full text-[75px] size-18"
            disableStyles
            onClick={onOpen}
          >
            +
          </Button>
        </Tooltip>
      </div>
    </>
  );
}
