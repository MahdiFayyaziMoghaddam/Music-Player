import { IAudioMetadata, parseBlob } from "music-metadata";
import { AudioMetadata } from "../types/AudioMetadata";
import { useStateContext } from "../contexts/StateContext";
import { useToastContext } from "../contexts/ToastContext";
import { fetchToFindPath, fetchToSendToDB } from "../services/api/fetching";

export default function useAudioMetadata() {
  const { dispatch, state } = useStateContext();
  const toast = useToastContext();

  type IAudioMetadataFunc = FileList;

  const audioMetadata = async (files: IAudioMetadataFunc) => {
    console.log(files);
    if (files.length > 0 && files) {
      for (const file of files) {
        try {
          console.log("from useAudioMetadata file:", file);
          const musicMetadata: IAudioMetadata = await parseBlob(file);
          console.log(musicMetadata);
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
            console.log(AudioMetadata);
            dispatch({ type: "ADD_MUSIC", value: AudioMetadata });

            const { paths }: { paths: string[] } = await fetchToFindPath([
              file.name,
            ]);
            console.log(paths)
            paths.forEach(async (path) => {
              await fetchToSendToDB(path);
            });

            toast({
              title: "Success",
              description: `successfully import music ...`,
              status: "success",
            });
          } else {
            toast({
              title: "Info",
              description: `music was imported ...`,
              status: "info",
            });
          }
        } catch {
          toast({
            title: "Error",
            description: "failed to processing file!",
            status: "fail",
          });
        }
      }
    }
  };
  return audioMetadata;
}
