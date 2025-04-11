"use client";
import React, { useEffect, useState } from "react";
import MusicCard from "../../Molecules/Card/MusicCard";
import Button from "../../Atoms/Button/Button";
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from "react-icons/tb";
import { IoMdSkipBackward, IoMdSkipForward } from "react-icons/io";
import { IoPause, IoPlay } from "react-icons/io5";
import Menu from "../../Atoms/Menu/Menu";
import Slider from "../../Atoms/Slider/Slider";
import { FaComputer, FaLink } from "react-icons/fa6";
import Volume from "../../Molecules/Volume/Volume";
import Repeat from "../../Molecules/Repeat/Repeat";

export default function Footer() {
  const [value, setValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setValue((prev) => (prev < 100 ? prev + 1 : 0));
      }
    }, 300);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex justify-around items-center bg-linear-90 from-dark-700 via-dark-600 to-dark-700 border-t-1 border-t-dark-400 h-22 shrink-0">
      <MusicCard
        title="Music Title"
        imgSrc="./images/paint.jpg"
        subtitle="Unknown"
        className="scale-110"
      />
      <div className="flex flex-col gap-2 justify-self-center justify-center items-center">
        <Slider
          className="w-[35rem]!"
          max={102}
          value={value}
          onChange={(v) => setValue(v)}
        />

        <div className="flex items-center gap-4">
          <Repeat />
          <Button variant="icon" className="rounded-sm! p-1! *:text-xl">
            <IoMdSkipBackward />
          </Button>
          <Button
            variant="icon"
            className="rounded-sm! p-0.5! *:text-3xl"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying ? <IoPause /> : <IoPlay />}
          </Button>
          <Button variant="icon" className="rounded-sm! p-1! *:text-xl">
            <IoMdSkipForward />
          </Button>
          <Volume />
        </div>
      </div>
      <div className="flex justify-end w-63">
        <Menu
          className="mb-2 mr-6 w-auto! text-[1.1rem]"
          items={[
            { title: "Import with URL", icon: <FaLink /> },
            { title: "Import From Local", icon: <FaComputer /> },
          ]}
        >
          <Button variant="primary">Import Music</Button>
        </Menu>
      </div>
    </div>
  );
}
