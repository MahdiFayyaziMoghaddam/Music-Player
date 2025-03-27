import {
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Slider as S,
} from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";

interface ISlider {
  className?: string;
  height?: string | number;
  value?: number;
  max?: number;
  min?: number;
  borderRadius?: string | number;
  thumbSize?: string | number;
  onChange?: (val: number) => void;
  vertical?: boolean;
}

const Slider = memo(({
  className = "w-25",
  height = "6px",
  value = 1,
  max = 2,
  min = 0,
  borderRadius = 0,
  thumbSize = "14px",
  onChange = () => null,
  vertical = false,
}: ISlider) => {
  const [val, setVal] = useState(value);

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <div
      className={`flex-center overflow-visible px-2 ${className}`}
      style={{
        overflow: "visible",
        padding: `0 ${
          typeof thumbSize === "string"
            ? `calc(${thumbSize} / 1.5)`
            : `${thumbSize * 3}px`
        } 0 ${
          typeof thumbSize === "string"
            ? `calc(${thumbSize} / 2)`
            : `${thumbSize * 2}px`
        }`,
      }}
    >
      <S
        w={"100%"}
        h={height}
        overflow={"visible"}
        value={val}
        max={max}
        min={min}
        onChange={(val) => {
          setVal(val);
          onChange(val);
        }}
        orientation={vertical ? "vertical" : "horizontal"}
      >
        <SliderThumb
          w={thumbSize}
          h={thumbSize}
          onFocus={(e) => e.target.blur()}
          _focus={{ border: "none", outline: "none", shadow: "none" }}
        />
        <SliderTrack
          h={height}
          overflow={"visible"}
          bg={"var(--dark-700-color)"}
          borderRadius={borderRadius}
        >
          <SliderFilledTrack
            bg={"var(--primary-color)"}
            borderRadius={borderRadius}
          />
        </SliderTrack>
      </S>
    </div>
  );
})
export default Slider