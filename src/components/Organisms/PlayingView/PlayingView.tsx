"use client";
import React, { useState } from "react";
import Image from "../../Atoms/Image/Image";
import MusicCard from "../../Molecules/Card/MusicCard";
import Tooltip from "../../Atoms/Tooltip/Tooltip";
import Button from "../../Atoms/Button/Button";
import { MdPreview } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";

export default function PlayingView() {
  const [isShowPlayingView, setIsShowPlayingView] = useState(false);
  const toggleShowPlayingView = () => setIsShowPlayingView((prev) => !prev);
  return (
    <>
      <Tooltip
        title={`${isShowPlayingView ? "Close" : "Open"} Playing View`}
        placement="bottomLeft"
      >
        <Button
          variant="primary"
          className={`absolute z-10 top-1 right-1 p-0.5! *:text-xl hover:opacity-100 active:opacity-100 duration-250! ${
            isShowPlayingView ? "opacity-25" : ""
          }`}
          onClick={toggleShowPlayingView}
        >
          <MdPreview />
        </Button>
      </Tooltip>
      {/* Playing View */}
      {isShowPlayingView && (
        <div className="h-full bg-dark-700 border-l-1 border-l-dark-400 shadow shadow-dark-900 overflow-y-auto scrollbar-hidden">
          <div className="relative size-70 border-b-1 border-b-dark-400 overflow-hidden">
            <Image src="./images/paint.jpg" alt=":)" className="size-full" />
            <div className="size-full shadow-dark-300/60 shadow-[0_-1.8rem_15rem_inner]">
              <div className="absolute w-full bottom-0 px-2 py-1">
                <p className="text-dark-100 text-xl">Title</p>
                <p className="text-dark-200 text-sm">Description ...</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 w-full px-5 py-5">
            <h2 className="text-dark-200 text-sm select-none font-semibold">
              Queue List:
            </h2>
            {[...Array(4)].map((_, i) => (
              <MusicCard
                key={i}
                title="Title"
                subtitle="Description ..."
                className="bg-dark-700! border-dark-400 border-1 p-1 pr-3 w-full"
              >
                <Tooltip title={"Remove from queue"} placement="topRight">
                  <Button variant="primary" className="p-1!">
                    <IoMdTrash />
                  </Button>
                </Tooltip>
              </MusicCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
