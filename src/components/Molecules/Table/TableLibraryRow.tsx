"use client";

import { useState } from "react";
import { IoPlay } from "react-icons/io5";
import MusicCard from "@/components/Molecules/Card/MusicCard";
import durationFormatter from "@/utils/durationFormatter";
import { RiPlayListAddFill } from "react-icons/ri";
import { MdQueue } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
import Equalizer from "@/components/Atoms/Equalizer/Equalizer";
import Tooltip from "@/components/Atoms/Tooltip/Tooltip";
import Button from "@/components/Atoms/Button/Button";
import { useToast } from "@/contexts/ToastContext";

interface ITableRowProps {
  imgSrc?: string;
  title: string;
  authors?: string;
  album?: string;
  duration?: number;
  number?: number;
  selected?: boolean;
}

export default function TableLibraryRow({
  title,
  album = "",
  authors = "",
  duration = 0,
  imgSrc = "#",
  number = 100,
  selected = false,
}: ITableRowProps) {
  const [isHover, setIsHover] = useState(false);
  const setToast = useToast();

  return (
    <>
      <tr
        className={`selected-item *:border-1 *:border-dark-400 px-5 py-1 hover:bg-dark-600/80 duration-100 text-sm text-dark-200 gap-2 ${
          selected
            ? "bg-primary/10! hover:bg-primary/10! *:border-primary/40! *:border-[1.35px]"
            : ""
        }`}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <td>
          <div className="flex-center text-[0.78rem]">
            {selected ? (
              <Equalizer className="*:bg-primary/70" />
            ) : isHover ? (
              <>
                <Tooltip title={`Play ${title}`} placement="top">
                  <Button variant="icon">
                    <IoPlay className="text-[1.1rem]" />
                  </Button>
                </Tooltip>
              </>
            ) : (
              number
            )}
          </div>
        </td>
        <td className="px-2 py-1">
          <MusicCard
            imgSrc={imgSrc}
            title={title}
            subtitle={authors}
            className="scale-92 -ml-3 w-[100%]"
          />
        </td>
        <td className="p-1 text-center">
          <p className="line-clamp-1">{album}</p>
        </td>
        <td className="p-1 text-center">
          <p className="line-clamp-1">{durationFormatter(duration)}</p>
        </td>
        <td className="p-1 text-right">
          <div className="flex justify-center gap-3 w-full">
            {isHover || selected ? (
              <>
                <Tooltip title="Add to Playlist">
                  <Button
                    variant="dark"
                    className="p-1!"
                    onClick={() =>
                      setToast({
                        show: true,
                        title: "Info",
                        description: "Music added to playlist.",
                        type: "info",
                      })
                    }
                  >
                    <RiPlayListAddFill className="text-lg" />
                  </Button>
                </Tooltip>
                <Tooltip title="Add to Queue">
                  <Button
                    variant="dark"
                    className="p-1!"
                    onClick={() =>
                      setToast({
                        show: true,
                        title: "Info",
                        description: "Music added to queue.",
                        type: "info",
                      })
                    }
                  >
                    <MdQueue className="text-lg" />
                  </Button>
                </Tooltip>
                <Tooltip title="Remove">
                  <Button
                    variant="primary"
                    className="p-1!"
                    onClick={() =>
                      setToast({
                        show: true,
                        title: "Remove",
                        description: "Successfully remove music.",
                        type: "error",
                      })
                    }
                  >
                    <IoMdTrash className="text-lg" />
                  </Button>
                </Tooltip>
              </>
            ) : null}
          </div>
        </td>
      </tr>
    </>
  );
}
