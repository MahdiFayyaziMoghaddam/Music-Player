import Slider from "../ui/Slider/Slider";
import { memo, useMemo, useState } from "react";
import { useAudio } from "../../contexts/AudioContext";
import { useStateContext } from "../../contexts/StateContext";
import durationFormatter from "../../utils/durationFormatter";

const MusicSlider = memo(() => {
  const [currentTime, setCurrentTime] = useState(false);
  const audio = useAudio();
  const { dispatch, state } = useStateContext();

  if (audio?.src && state.isPlayMusic) {
    setTimeout(() => {
      setCurrentTime((prev) => !prev);
      if (audio?.ended) {
        dispatch({ type: "PLAY_MUSIC" });
        dispatch({
          type: "INCREASE_MUSIC_INDEX",
        });
      }
    }, 1000);
  }

  return (
    <>
      {useMemo(
        () => (
          <div className="gap-2 flex-center">
            <p className="text-xl text-dark-400 max-2xl:text-[16px] max-md:text-[12px] max-sm:text-[10px]">
              {durationFormatter(audio?.currentTime)}
            </p>
            <Slider
              className="w-200 max-4xl:w-150 max-3xl:w-100"
              height={"6px"}
              thumbSize={"16px"}
              borderRadius={1}
              value={audio?.currentTime || 0}
              max={audio?.duration || 0.1}
              onChange={(val) =>
                audio?.src &&
                ((audio.currentTime = val), setCurrentTime((prev) => !prev))
              }
            />
            <p className="text-xl text-dark-400 max-2xl:text-[16px] max-md:text-[12px] max-sm:text-[10px]">
              {durationFormatter(audio?.duration || 0)}
            </p>
          </div>
        ),
        [currentTime]
      )}
    </>
  );
});
export default MusicSlider;
