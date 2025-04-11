"use client";
import React, { useState } from "react";
import Button from "../../Atoms/Button/Button";
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from "react-icons/tb";

export default function Repeat() {
  const [repeatType, setRepeatType] = useState<"all" | "once" | "off">("all");

  return (
    <Button
      variant="icon"
      className="rounded-sm! p-1! *:text-xl"
      onClick={() => {
        switch (repeatType) {
          case "all":
            setRepeatType("once");
            break;
          case "once":
            setRepeatType("off");
            break;
          case "off":
            setRepeatType("all");
            break;
        }
      }}
    >
      {repeatType === "all" ? (
        <TbRepeat strokeWidth={1.65} />
      ) : repeatType === "once" ? (
        <TbRepeatOnce strokeWidth={1.65} />
      ) : (
        <TbRepeatOff strokeWidth={1.65} />
      )}
    </Button>
  );
}
