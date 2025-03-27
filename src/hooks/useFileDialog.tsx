import { useEffect, useRef } from "react";
import useAudioMetadata from "./useAudioMetadata";

const useFileDialog = () => {
  const FileDialog = () => {
    const audioMetadata = useAudioMetadata();
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
      inputRef.current?.click();
    }, []);

    return (
      <input
        className="hidden"
        type="file"
        accept=".mp3, .m4a, .ogg, .wav"
        multiple={true}
        onChange={async (e) => audioMetadata(e.target.files as FileList)}
        ref={inputRef}
      />
    );
  };

  return FileDialog;
};

export default useFileDialog;
