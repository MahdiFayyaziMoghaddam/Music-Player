import { memo, useEffect, useMemo, useState } from "react";
import {
  IoMdSkipBackward,
  IoMdSkipForward,
  IoMdVolumeHigh,
  IoMdVolumeLow,
  IoMdVolumeMute,
} from "react-icons/io";
import { useStateContext } from "../../contexts/StateContext";
import { IoPause, IoSpeedometerOutline } from "react-icons/io5";
import { TbRepeat, TbRepeatOff, TbRepeatOnce } from "react-icons/tb";
import Slider from "../ui/Slider/Slider";
import Image from "../Image/Image";
import Like from "../ui/Like/Like";
import { useAudio } from "../../contexts/AudioContext";
import MusicSlider from "../MusicSlider/MusicSlider";
import useFileDialog from "../../hooks/useFileDialog";
import { RiPlayLargeFill } from "react-icons/ri";
import Button from "../ui/Button/Button";
import Tooltip from "../ui/Tooltip/Tooltip";

const Controls = memo(() => {
  const audio = useAudio();
  const { state, dispatch } = useStateContext();
  const [volume, setVolume] = useState(50);
  const [prevVolume, setPrevVolume] = useState(volume ? volume : 50);
  const [repeatType, setRepeatType] = useState<"all" | "off" | "once">("all");
  const [isShowFileDialog, setIsShowFileDialog] = useState(false);
  const FileDialog = useFileDialog();

  useEffect(() => {
    if (isShowFileDialog) {
      setIsShowFileDialog(false);
    }
  }, [isShowFileDialog, setIsShowFileDialog]);

  useEffect(() => {
    if (state.allMusics.length > 0 && audio) {
      audio.src = state.allMusics[state.musicIndex].url;
    }
  }, [state.allMusics]);

  useEffect(() => {
    if (state.allMusics.length > 0) {
      if (state.isPlayMusic) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [state.isPlayMusic]);

  useEffect(() => {
    if (audio?.src && state.allMusics.length > 0) {
      audio.src = state.allMusics[state.musicIndex]?.url;
      audio.play();
    }
  }, [state.musicIndex]);

  useEffect(() => {
    if (audio?.volume) {
      audio.volume = volume / 100;
    }
  }, [volume]);

  if (
    state.allMusics.length > 0 &&
    !state.allMusics[state.musicIndex].duration
  ) {
    state.allMusics[state.musicIndex].duration = audio.duration || 0;
  }

  const changeRepeatType = () => {
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
  };

  return (
    <>
      <div
        className="relative bottom-0 z-10 flex items-center justify-between w-full border-t-main bg-dark-800 shrink-0"
        style={{ height: "var(--controls-height)" }}
      >
        <div className="w-85 h-18 mx-5 max-3xl:w-40">
          {useMemo(
            () =>
              state.allMusics.length > 0 ? (
                <div className="relative flex gap-2 h-full w-full rounded-sm bg-gradient-main select-none">
                  <Image
                    src={state.allMusics[state.musicIndex]?.image}
                    className="size-18 rounded-sm"
                  />
                  <div className="w-55 max-w-55 h-full">
                    <p className="text-[20px] text-title line-clamp-1">
                      {state.allMusics[state.musicIndex]?.title}
                    </p>
                    <p className="text-[16px] text-text line-clamp-1">
                      {state.allMusics[state.musicIndex]?.artists}
                    </p>
                  </div>
                  <Like
                    className="text-primary size-7 absolute bottom-1 right-1"
                    locked
                  />
                </div>
              ) : null,
            [state.allMusics, state.musicIndex]
          )}
        </div>

        <div className="flex flex-col gap-2">
          <MusicSlider />
          <div className="gap-4 flex-center">
            <div className="justify-end h-full gap-3 flex-center">
              <Tooltip title={repeatType} placement="top" delay={10}>
                <Button
                  variant="default"
                  className="rounded-md flex-center hover:bg-dark-700 p-0.5"
                  onClick={changeRepeatType}
                >
                  {repeatType === "all" ? (
                    <TbRepeat
                      className="text-dark-100 size-9"
                      style={{ width: "90%" }}
                      strokeWidth="1.5px"
                    />
                  ) : repeatType === "once" ? (
                    <TbRepeatOnce
                      className="text-dark-100 size-9"
                      style={{ width: "90%" }}
                      strokeWidth="1.5px"
                    />
                  ) : (
                    <TbRepeatOff
                      className="text-dark-100 size-9"
                      style={{ width: "90%" }}
                      strokeWidth="1.5px"
                    />
                  )}
                </Button>
              </Tooltip>
              <Button
                variant="default"
                className="rounded-md flex-center hover:bg-dark-700 p-0.5"
                onClick={changeRepeatType}
              >
                {repeatType === "all" ? (
                  <TbRepeat
                    className="text-dark-100 size-9"
                    style={{ width: "90%" }}
                    strokeWidth="1.5px"
                  />
                ) : repeatType === "once" ? (
                  <TbRepeatOnce
                    className="text-dark-100 size-9"
                    style={{ width: "90%" }}
                    strokeWidth="1.5px"
                  />
                ) : (
                  <TbRepeatOff
                    className="text-dark-100 size-9"
                    style={{ width: "90%" }}
                    strokeWidth="1.5px"
                  />
                )}
              </Button>

              <Tooltip
                title="1.5x"
                delay={10}
                closeOnClick={false}
                placement="top"
              >
                <Button
                  variant="default"
                  className="rounded-md flex-center hover:bg-dark-700 p-1"
                >
                  <IoSpeedometerOutline className="text-dark-100 size-8" />
                </Button>
              </Tooltip>
            </div>

            <Button
              variant="default"
              className="rounded-md flex-center hover:bg-dark-700 p-1.5"
              onClick={() => dispatch({ type: "DECREASE_MUSIC_INDEX" })}
            >
              <IoMdSkipBackward className="text-dark-100 size-9" />
            </Button>

            <Button
              variant="default"
              className="rounded-md flex-center hover:bg-dark-700 p-1"
              onClick={() => dispatch({ type: "TOGGLE_PLAYING_MUSIC" })}
            >
              {!state.isPlayMusic ? (
                <RiPlayLargeFill className="text-dark-100 size-12" />
              ) : (
                <IoPause className="text-dark-100 size-12" />
              )}
            </Button>

            <Button
              variant="default"
              className="rounded-md flex-center hover:bg-dark-700 p-1.5"
              onClick={() => dispatch({ type: "INCREASE_MUSIC_INDEX" })}
            >
              <IoMdSkipForward className="text-dark-100 size-9" />
            </Button>

            <div className="flex items-center gap-1 overflow-visible">
              <Button
                variant="default"
                className="rounded-md flex-center hover:bg-dark-700 p-1"
                onClick={() => {
                  if (volume === 0) {
                    setVolume(prevVolume);
                  } else {
                    setVolume(0);
                  }
                }}
              >
                {volume === 0 ? (
                  <IoMdVolumeMute className="text-dark-100 size-8" />
                ) : volume < 50 ? (
                  <IoMdVolumeLow className="text-dark-100 size-8" />
                ) : (
                  <IoMdVolumeHigh className="text-dark-100 size-8" />
                )}
              </Button>
              <Tooltip
                title={`${volume}`}
                closeOnClick={false}
                delay={10}
                placement="right"
              >
                <Slider
                  className="w-21"
                  max={100}
                  value={volume}
                  thumbSize={"13px"}
                  borderRadius={1}
                  onChange={(val: number) => {
                    setVolume(val);
                    setPrevVolume(val ? val : 50);
                  }}
                />
              </Tooltip>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 w-85 h-18 mx-5 select-none max-3xl:w-40">
          <Button variant="primary" onClick={() => setIsShowFileDialog(true)}>
            Import Music
          </Button>
          <p className="text-xl text-dark-400 max-3xl:hidden">
            All Musics:{" "}
            <span className="text-primary text-2xl">
              {state.allMusics.length}
            </span>
          </p>
          {isShowFileDialog && <FileDialog />}
        </div>
      </div>
    </>
  );
});

export default Controls;
