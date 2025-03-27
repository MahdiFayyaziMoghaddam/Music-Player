import { AudioMetadata } from "./AudioMetadata";

export interface States {
  isPlayMusic: boolean
  allMusics: AudioMetadata[],
  musicIndex: number,
  allFavored: AudioMetadata[]
  allQueue: AudioMetadata[]
}
