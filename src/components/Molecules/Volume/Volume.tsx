"use client";
import React, { useEffect, useRef, useState } from "react";
import Button from "../../Atoms/Button/Button";
import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeMute } from "react-icons/io";
import Slider from "../../Atoms/Slider/Slider";

export default function Volume() {
  const [volume, setVolume] = useState(50);
  const prevVolume = useRef(50);

  useEffect(() => {
    if (volume !== 0) {
      prevVolume.current = volume;
    }
  }, [volume]);

  return (
    <div className={`relative flex bg-amber-`}>
      <Button
        variant="icon"
        className="rounded-sm! p-1! *:text-xl volume-btn"
        onClick={() => {
          if (volume === 0) {
            setVolume(prevVolume.current);
          } else {
            setVolume(0);
          }
        }}
      >
        {volume === 0 ? (
          <IoMdVolumeMute />
        ) : volume < 50 ? (
          <IoMdVolumeLow />
        ) : (
          <IoMdVolumeHigh />
        )}
      </Button>
      <Slider
        max={10}
        value={volume / 10}
        onChange={(v) => setVolume(v * 10)}
        className="absolute w-12! h-0 top-[7px] left-[38px] volume-slider"
      />
    </div>
  );
}
