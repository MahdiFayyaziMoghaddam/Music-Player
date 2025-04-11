import { IAudioMetadata, parseBlob } from "music-metadata";
import { AudioMetadata } from "../types/AudioMetadata";
import { useStateContext } from "../contexts/StateContext";

export default function useAudioMetadata() {
  const { dispatch, state } = useStateContext();

  type IAudioMetadataFunc = FileList;

  const audioMetadata = async (files: IAudioMetadataFunc) => {
    if (files.length > 0 && files) {
      for (const file of files) {
        try {
          const musicMetadata: IAudioMetadata = await parseBlob(file);
          const musicURL: string = URL.createObjectURL(file);
          let musicImgURL: string = "";

          if (
            musicMetadata.common?.picture &&
            musicMetadata.common.picture[0]
          ) {
            const musicImg = musicMetadata.common.picture[0];
            const musicImgBlob = new Blob([musicImg.data], {
              type: musicImg.format,
            });
            musicImgURL = URL.createObjectURL(musicImgBlob);
          }

          const AudioMetadata: AudioMetadata = {
            title: musicMetadata.common?.title || "Unknown Title",
            artists:
              musicMetadata.common?.artists?.join(",") || "Unknown Artist",
            album: musicMetadata.common?.album || "Unknown Album",
            duration: musicMetadata.format.duration || 0,
            image: musicImgURL,
            url: musicURL,
            size:
              file.size / 1024 > 1024
                ? `${(file.size / 1024 / 1024).toFixed(2)} MB`
                : `${(file.size / 1024).toFixed(2)} KB`,
          };
          if (
            state.allMusics.filter(
              (music) => music.title === AudioMetadata.title
            ).length === 0
          ) {
            dispatch({ type: "ADD_MUSIC", value: AudioMetadata });
          } else {
          }
        } catch {}
      }
    }
  };
  return audioMetadata;
}
