import { AudioMetadata } from "./AudioMetadata";

export type Actions =
  | { type: "ADD_MUSIC"; value: AudioMetadata }
  | { type: "INCREASE_MUSIC_INDEX" }
  | { type: "DECREASE_MUSIC_INDEX" }
  | { type: "SET_MUSIC_INDEX"; value: number }
  | { type: "TOGGLE_PLAYING_MUSIC" }
  | { type: "PLAY_MUSIC" }
  | { type: "PAUSE_MUSIC" };
