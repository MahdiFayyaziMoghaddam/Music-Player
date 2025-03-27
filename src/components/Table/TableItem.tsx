import { useStateContext } from "../../contexts/StateContext";
import Image from "../Image/Image";
import { MdDelete, MdQueue } from "react-icons/md";
import Tooltip from "../ui/Tooltip/Tooltip";
import Like from "../ui/Like/Like";
import durationFormatter from "../../utils/durationFormatter";

interface ITableItem {
  title: string;
  artists: string;
  album: string;
  image: string;
  duration: number;
  onClick: () => void;
  className?: string;
  index: number;
}

export default function TableItem({
  album,
  artists,
  duration,
  image,
  title,
  onClick,
  className,
  index,
}: ITableItem) {
  const { state } = useStateContext();

  return (
    <div
      className={`text-title flex items-center rounded-sm py-2 ${
        index === state.musicIndex ? "bg-gradient-main" : ""
      } hover:bg-dark2 text-xl ${className}`}
      onClick={onClick}
    >
      <div
        className="flex items-center gap-2 text-left w-155 max-w-155"
        onClick={onClick}
      >
        <Image src={image} className="rounded-sm size-14 ml-2" />
        <div
          className="overflow-hidden text-ellipsis h-14"
          style={{ width: "calc(100% - 5rem)" }}
        >
          <p className="w-full line-clamp-1">{title}</p>
          <p className="w-full text-[16px] text-text line-clamp-1">{artists}</p>
        </div>
      </div>
      <div className="flex items-center text-left w-155 max-w-155 h-14">
        <p className="w-full line-clamp-1">{album}</p>
      </div>
      <div className="flex-center w-25 h-14">
        <p className="w-full text-center">{durationFormatter(duration)}</p>
      </div>
      <div className="w-40 gap-3 flex-center h-14">
        <Like className="size-8 text-primary" />
        <Tooltip title="add to queue" placement="top">
          <button className="size-8">
            <MdQueue className="text-title" />
          </button>
        </Tooltip>
        <Tooltip title="remove" placement="top">
          <button className="size-8">
            <MdDelete className="text-primary" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
