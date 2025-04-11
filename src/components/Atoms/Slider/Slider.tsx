"use client";
import { Slider as S } from "@base-ui-components/react";
import React, { memo, useState, useMemo, useCallback } from "react";

interface ISliderProps {
  value?: number;
  max?: number;
  min?: number;
  disable?: boolean;
  scrollLock?: boolean;
  className?: string;
  step?: number;
  onChange?: (v: number) => void;
}

const Slider = memo(function Slider({
  value: val = 0,
  disable = false,
  max = 1,
  min = 0,
  className,
  step = 1,
  scrollLock = false,
  onChange = (v: number) => null,
}: ISliderProps) {
  const value = useMemo(() => val, [val]);

  return (
    <S.Root
      max={max}
      min={min}
      value={value}
      onValueChange={onChange}
      autoFocus={false}
      onFocus={(e) => e.currentTarget.blur()}
      step={step}
    >
      <S.Control
        className={`flex items-center w-[12rem] select-none py-2 cursor-pointer ${className}`}
        onWheel={(e) => {
          if (!disable && !scrollLock) {
            if (e.deltaY >= 0) {
              onChange(value >= step * 2 ? value - step * 2 : 0);
            } else {
              onChange(value + step * 2 <= max ? value + step * 2 : max);
            }
          }
        }}
      >
        <S.Track className="h-1 w-full bg-dark-400 rounded-2xl select-none">
          <S.Indicator className="bg-primary rounded-2xl select-none" />
          <S.Thumb className="size-[0.7rem] rounded-full bg-dark-100 select-none focus-visible:outline focus-visible:outline-blue-800" />
        </S.Track>
      </S.Control>
    </S.Root>
  );
});

export default Slider;
