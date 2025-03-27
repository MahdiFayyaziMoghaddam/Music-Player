import { memo, useMemo, useRef } from "react";
import { useStateContext } from "../../contexts/StateContext";
import Image from "../Image/Image";
import Like from "../ui/Like/Like";

interface IDetails {
  className?: string;
}

const Details = memo(({ className }: IDetails) => {
  const titleRef = useRef<HTMLParagraphElement>(null);
  const { state } = useStateContext();

  return (
    <>
      {useMemo(
        () => (
          <div
            className={`flex flex-col items-center bg-dark1 max-2xl:p-0 max-2xl:bg-transparent max-2xl:w-full overflow-auto scrollbar-hidden ${className}`}
          >
            <div className="relative size-85 border-b-main">
              <Image
                className="z-0 select-none size-full"
                src={state.allMusics[state.musicIndex]?.image}
              />
              <div className="absolute bottom-0 left-0 z-10 flex items-end justify-between w-full p-2 pt-70  img-shadow-inner">
                <div className="flex flex-col gap-1 max-w-70">
                  <p
                    className="text-2xl text-title line-clamp-1 text-shadow-main"
                    ref={titleRef}
                  >
                    {state.allMusics[state.musicIndex]?.title || "Music Title"}
                  </p>

                  <p className="text-lg text-text line-clamp-1 text-shadow-main">
                    {state.allMusics[state.musicIndex]?.artists ||
                      "Music Artists"}
                  </p>
                </div>
                <Like className="cursor-pointer text-primary size-9" />
              </div>
            </div>

            {state.allMusics.length > 1 &&
            state.musicIndex < state.allMusics.length - 1 ? (
              <div className="flex flex-col px-2 mt-10 mb-5 overflow-auto flex-nowrap w-85">
                <p className="pb-3 pl-2 text-xl text-title">Queue List:</p>

                <div className="flex flex-col gap-4 px-2 overflow-auto max-h-73">
                  <div className="flex items-center gap-2 rounded-sm flex-nowrap bg-gradient-main">
                    <Image
                      className="size-15 max-3xl:rounded-md"
                      src={state.allMusics[state.musicIndex]?.image}
                    />
                    <div className="h-full max-w-57 w-full">
                      <p className="text-lg text-title line-clamp-1">
                        {state.allMusics[state.musicIndex]?.title}
                      </p>
                      <p className="text-sm text-text line-clamp-1">
                        {state.allMusics[state.musicIndex]?.artists}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-sm flex-nowrap bg-gradient-main">
                    <Image
                      className="size-15 max-3xl:rounded-md"
                      src={state.allMusics[state.musicIndex]?.image}
                    />
                    <div className="h-full max-w-55" style={{ width: "80%" }}>
                      <p className="text-lg text-title line-clamp-1">
                        {state.allMusics[state.musicIndex]?.title}
                      </p>
                      <p className="text-sm text-text line-clamp-1">
                        {state.allMusics[state.musicIndex]?.artists}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-sm flex-nowrap bg-gradient-main">
                    <Image
                      className="size-15 max-3xl:rounded-md"
                      src={state.allMusics[state.musicIndex]?.image}
                    />
                    <div className="h-full max-w-55" style={{ width: "80%" }}>
                      <p className="text-lg text-title line-clamp-1">
                        {state.allMusics[state.musicIndex]?.title}
                      </p>
                      <p className="text-sm text-text line-clamp-1">
                        {state.allMusics[state.musicIndex]?.artists}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-sm flex-nowrap bg-gradient-main">
                    <Image
                      className="size-15 max-3xl:rounded-md"
                      src={state.allMusics[state.musicIndex]?.image}
                    />
                    <div className="h-full max-w-55" style={{ width: "80%" }}>
                      <p className="text-lg text-title line-clamp-1">
                        {state.allMusics[state.musicIndex]?.title}
                      </p>
                      <p className="text-sm text-text line-clamp-1">
                        {state.allMusics[state.musicIndex]?.artists}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-sm flex-nowrap bg-gradient-main">
                    <Image
                      className="size-15 max-3xl:rounded-md"
                      src={state.allMusics[state.musicIndex]?.image}
                    />
                    <div className="h-full max-w-55" style={{ width: "80%" }}>
                      <p className="text-lg text-title line-clamp-1">
                        {state.allMusics[state.musicIndex]?.title}
                      </p>
                      <p className="text-sm text-text line-clamp-1">
                        {state.allMusics[state.musicIndex]?.artists}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ),
        [state.allMusics, state.musicIndex, className]
      )}
    </>
  );
});
export default Details;
