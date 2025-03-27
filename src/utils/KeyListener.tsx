import { memo } from "react";
import { useStateContext } from "../contexts/StateContext";

const KeyListener = memo(() => {
  const { dispatch } = useStateContext();

  window.onkeydown = (e) => {
    switch (e.key) {
      case "k": {
        dispatch({ type: "TOGGLE_PLAYING_MUSIC" });
        break;
      }
      case "l": {
        dispatch({ type: "INCREASE_MUSIC_INDEX" });
        break;
      }
      case "j": {
        dispatch({ type: "DECREASE_MUSIC_INDEX" });
        break;
      }
    }
  };
  return <></>;
});

export default KeyListener;
