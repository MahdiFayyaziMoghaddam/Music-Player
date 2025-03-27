import { memo } from "react";
import { useStateContext } from "../../contexts/StateContext";
import { AudioMetadata } from "../../types/AudioMetadata";
import TableItem from "./TableItem";

const Table = memo(() => {
  const { state, dispatch } = useStateContext();

  return (
    <div className="my-5 border-collapse rounded-md bg-dark1 text-title">
      <div className="flex p-1 text-lg font-bold border-b-main text-text">
        <div className="w-155 max-w-155 pl-1">Title</div>
        <div className="w-155 max-w-155">Album</div>
        <div className="text-center w-30 max-w-25">Duration</div>
        <div className="w-40 text-center max-w-40">Actions</div>
      </div>
      <div className="flex flex-col gap-1 p-1">
        {state.allMusics.map((music: AudioMetadata, index: number) => (
          <TableItem
            key={music.title}
            onClick={() => dispatch({ type: "SET_MUSIC_INDEX", value: index })}
            index={index}
            {...music}
          />
        ))}
      </div>
    </div>
  );
})
export default Table